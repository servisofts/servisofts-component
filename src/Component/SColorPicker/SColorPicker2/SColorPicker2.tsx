// ColorPickerGradient.tsx
import React, { useMemo, useRef, useState } from "react";
import { View, Text, PanResponder, GestureResponderEvent, StyleSheet } from "react-native";
import { SGradient } from "../../../index";

type HSV = { h: number; s: number; v: number };
type RGB = { r: number; g: number; b: number };

function clamp(n: number, min = 0, max = 1) {
  return Math.max(min, Math.min(max, n));
}

// ---------------------- CONVERSORES ---------------------- //
function hsvToRgb({ h, s, v }: HSV): RGB {
  const c = v * s;
  const hh = (h / 60) % 6;
  const x = c * (1 - Math.abs((hh % 2) - 1));
  let [r, g, b] = [0, 0, 0];
  if (0 <= hh && hh < 1) [r, g, b] = [c, x, 0];
  else if (1 <= hh && hh < 2) [r, g, b] = [x, c, 0];
  else if (2 <= hh && hh < 3) [r, g, b] = [0, c, x];
  else if (3 <= hh && hh < 4) [r, g, b] = [0, x, c];
  else if (4 <= hh && hh < 5) [r, g, b] = [x, 0, c];
  else[r, g, b] = [c, 0, x];
  const m = v - c;
  return { r: Math.round((r + m) * 255), g: Math.round((g + m) * 255), b: Math.round((b + m) * 255) };
}

function rgbToHex({ r, g, b }: RGB, a: number = 1) {
  const toHex = (n: number) => n.toString(16).padStart(2, "0");
  if (a < 1) {
    return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(Math.round(a * 255))}`.toUpperCase();
  }
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();

}

function hexToRgba(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const a = hex.length === 9 ? parseInt(hex.slice(7, 9), 16) / 255 : 1;
  return { r, g, b, a };
}

function rgbaStringToRgba(rgba: string) {
  const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (!match) return { r: 0, g: 0, b: 0, a: 1 };
  return {
    r: parseInt(match[1]),
    g: parseInt(match[2]),
    b: parseInt(match[3]),
    a: match[4] !== undefined ? parseFloat(match[4]) : 1,
  };
}

function rgbToHsv({ r, g, b }: RGB): HSV {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  let h = 0;
  if (d !== 0) {
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
  }
  const s = max === 0 ? 0 : d / max;
  return { h, s, v: max };
}

function hueToColor(h: number) {
  return rgbToHex(hsvToRgb({ h, s: 1, v: 1 }));
}

const HUE_COLORS = Array.from({ length: 7 }, (_, i) => hueToColor((i * 60) % 360));

// ---------------------- PROPS ---------------------- //
interface Props {
  type?: "hex" | "rgba" | "hsv";
  initialColor?: string | { hsv: HSV; a?: number };
  onChange?: (data: string | { hsv: HSV; a: number }) => void;
  width?: number;
}

// ---------------------- COMPONENTE ---------------------- //
export default function SColorPicker2({ type = "hex", initialColor, onChange, width = 280 }: Props) {
  // Normalizar initialColor a hsv + a
  let initHsv: HSV = { h: 0, s: 1, v: 1 };
  let initA = 1;

  if (type === "hex" && typeof initialColor === "string") {
    const { r, g, b, a } = hexToRgba(initialColor);
    initHsv = rgbToHsv({ r, g, b });
    initA = a;
  } else if (type === "rgba" && typeof initialColor === "string") {
    const { r, g, b, a } = rgbaStringToRgba(initialColor);
    initHsv = rgbToHsv({ r, g, b });
    initA = a;
  } else if (type === "hsv" && typeof initialColor === "object" && "hsv" in initialColor) {
    initHsv = initialColor.hsv;
    initA = initialColor.a ?? 1;
  }

  const [hsv, setHSV] = useState<HSV>(initHsv);
  const [a, setAlpha] = useState<number>(initA);

  const pad = 12;
  const hueHeight = 20;
  const alphaHeight = 20;
  const svSize = width;
  const trackW = width;

  const rgb = useMemo(() => hsvToRgb(hsv), [hsv]);
  const hueColor = useMemo(() => hueToColor(hsv.h), [hsv.h]);

  const output = useMemo(() => {
    if (type === "hex") return rgbToHex(rgb, a);
    if (type === "rgba") return `rgba(${rgb.r},${rgb.g},${rgb.b},${a.toFixed(2)})`;
    return { hsv, a };
  }, [rgb, a, hsv, type]);

  React.useEffect(() => {
    onChange?.(output);
  }, [output]);

  // ---------------------- Layout y Gestures ---------------------- //
  const svLayout = useRef({ x: 0, y: 0, w: svSize, h: svSize });
  const hueLayout = useRef({ x: 0, y: 0, w: trackW, h: hueHeight });
  const alphaLayout = useRef({ x: 0, y: 0, w: trackW, h: alphaHeight });

  const handleSVMove = (e: GestureResponderEvent) => {
    const { locationX, locationY } = e.nativeEvent;
    const s = clamp(locationX / svLayout.current.w);
    const v = clamp(1 - locationY / svLayout.current.h);
    setHSV(prev => ({ ...prev, s, v }));
  };

  const svPan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: handleSVMove,
      onPanResponderMove: handleSVMove,
    })
  ).current;

  const handleHueMove = (e: GestureResponderEvent) => {
    const { locationX } = e.nativeEvent;
    const h = clamp(locationX / hueLayout.current.w) * 360;
    setHSV(prev => ({ ...prev, h }));
  };

  const huePan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: handleHueMove,
      onPanResponderMove: handleHueMove,
    })
  ).current;

  const handleAlphaMove = (e: GestureResponderEvent) => {
    const { locationX } = e.nativeEvent;
    setAlpha(clamp(locationX / alphaLayout.current.w));
  };

  const alphaPan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: handleAlphaMove,
      onPanResponderMove: handleAlphaMove,
    })
  ).current;

  // ---------------------- Indicadores ---------------------- //
  const svThumbStyle = {
    left: clamp(hsv.s * svLayout.current.w, 0, svLayout.current.w) - 10,
    top: clamp((1 - hsv.v) * svLayout.current.h, 0, svLayout.current.h) - 10,
  };
  const hueThumbLeft = clamp((hsv.h / 360) * hueLayout.current.w, 0, hueLayout.current.w) - 8;
  const alphaThumbLeft = clamp(a * alphaLayout.current.w, 0, alphaLayout.current.w) - 8;

  return (
    <View style={{ width, alignItems: "stretch" }}>
      {/* SV Panel */}
      <View
        style={{ width: svSize, height: svSize, borderRadius: 12, overflow: "hidden", marginBottom: 14 }}
        onLayout={e => {
          const { x, y, width: w, height: h } = e.nativeEvent.layout;
          svLayout.current = { x, y, w, h };
        }}
        {...svPan.panHandlers}
      >
        <SGradient colors={["#FFFFFF", hueColor]} deg={90} />
        <SGradient colors={["#00000000", "#000000"]} deg={180} />
        <View
          style={[
            styles.thumb,
            {
              borderColor: hsv.v > 0.5 ? "#00000088" : "#FFFFFF88",
              transform: [{ translateX: svThumbStyle.left }, { translateY: svThumbStyle.top }],
            },
          ]}
        />
      </View>

      {/* Hue slider */}
      <View
        style={{ height: hueHeight, justifyContent: "center", marginBottom: 12 }}
        onLayout={e => {
          const { x, y, width: w, height: h } = e.nativeEvent.layout;
          hueLayout.current = { x, y, w, h };
        }}
        {...huePan.panHandlers}
      >
        <View style={{ width: "100%", height: "100%", overflow: "hidden", borderRadius: 999, }} >
          <SGradient colors={HUE_COLORS} deg={90} />
        </View>
        <View style={[styles.hueThumb, { transform: [{ translateX: hueThumbLeft }] }]} />
      </View>

      {/* Alpha slider */}
      <View
        style={{ height: alphaHeight, justifyContent: "center" }}
        onLayout={e => {
          const { x, y, width: w, height: h } = e.nativeEvent.layout;
          alphaLayout.current = { x, y, w, h };
        }}
        {...alphaPan.panHandlers}
      >
        <View style={{ width: "100%", height: "100%", overflow: "hidden", borderRadius: 999, }} >
          <SGradient colors={[`rgba(${rgb.r},${rgb.g},${rgb.b},0)`, `rgba(${rgb.r},${rgb.g},${rgb.b},1)`]} deg={90} />
        </View>
        <View style={[styles.hueThumb, { transform: [{ translateX: alphaThumbLeft }] }]} />
      </View>

      {/* Preview */}
      <View style={styles.row}>
        <View style={[styles.swatch, { backgroundColor: `rgba(${rgb.r},${rgb.g},${rgb.b},${a})` }]} />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.code}>{JSON.stringify(output)}</Text>
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    position: "absolute",
  },
  hueThumb: {
    position: "absolute",
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#fff",
    top: 2,
  },
  row: { flexDirection: "row", alignItems: "center", marginTop: 12 },
  swatch: { width: 36, height: 36, borderRadius: 8, borderWidth: 1, borderColor: "#00000022" },
  code: { fontWeight: "600", fontSize: 14, color: "#666" },
});

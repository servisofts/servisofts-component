import React from 'react';
import { View } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
const BackgroundImage = (props) => {
    return <View style={{
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        position: "absolute",
        backgroundColor: "#999fff",
        // padding: 0,
    }}>
        <Svg width={"100%"} height={"100%"}  >
            <Defs>
                <LinearGradient id="negro_amarillo2" x1="50%" x2="50%" y2="100%" gradientUnits="objectBoundingBox">
                    <Stop offset="0" stop-color="#1c1c1c" />
                    <Stop offset="1" stop-color="#4a2a00" />
                </LinearGradient>
            </Defs>
            <Rect width="100%" height="100%"
                fill="url(#negro_amarillo2)"
            // fill="#f0f"
            />

        </Svg>

    </View>
}

export default BackgroundImage;
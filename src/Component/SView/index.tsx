import React, { Component } from 'react';
import { View, Text, ViewStyle, TouchableOpacity, Animated, ViewProps, TouchableOpacityProps, Platform } from 'react-native';

import { SColType, SDirectionType, TColKeyConv } from '../../Types/index';
import SGrid from '../SGrid/index';
import STheme from '../STheme';


export type SViewProps = {
  col?: SColType,
  colHidden?: TColKeyConv,
  dir?: SDirectionType,
  row?: boolean,
  borderRadius?: number,
  br?: number
  padding?: any,
  margin?: any,
  // props?: SViewProps,
  refs?: any,
  ref?: any,
  data?: any,
  style?: ViewStyle,
  onPress?: Function,
  colSquare?: boolean,
  center?: boolean,
  animated?: boolean,
  backgroundColor?: string,
  flex?: Number | boolean,
  height?: any,
  width?: Number | boolean | string,
  withoutFeedback?: Boolean,
  card?: boolean,
  border?: Number | boolean,
} & ViewProps & TouchableOpacityProps

export default class SView extends Component<SViewProps> {
  state: any;
  layout: any;
  constructor(props: SViewProps) {
    super(props);
    var propsP: any;
    // if (!propsP) {
    propsP = {};
    // }
    this.state = {
      params: {
        col: (props.col ? props.col : propsP.col),
        dir: (!props.dir ? (!propsP.dir ? "column" : propsP.dir) : props.dir),
        style: { ...(!props.style ? {} : props.style) }
      }
    };
  }
  getLayout() {
    return this.layout;
  }
  getProp(prop: string) {
    return this.props[prop];
  }
  getData() {
    return this.props.data;
  }

  _ELEM;
  render(): any {

    var otherProps: any = {
      ...this.props
    };
    delete otherProps.height;
    var Element: any = View;
    if (this.props.onPress) {
      Element = TouchableOpacity;
    }
    if (this.props.withoutFeedback) {
      Element = TouchableOpacity;
      otherProps.activeOpacity = 1;
      // if (this.props.animated) {
      // Component = Animated.createAnimatedComponent(Component);
      // }
    }
    if (this.props.animated) {
      Element = Animated.createAnimatedComponent(Element);
    }
    var styles_p: any = this.props.style
    var style = { ...styles_p };
    if (style) {
      delete style["top"];
      delete style["left"];
      delete style["right"];
      delete style["bottom"];
      delete style["position"];
      delete style["margin"];
      delete style["marginBottom"];
      delete style["marginTop"];
      delete style["marginLeft"];
      delete style["marginStart"];
      delete style["marginRight"];
      delete style["marginEnd"];
      delete style["maxHeight"];
      delete style["maxWidth"];
    }

    return (
      <SGrid
        colSquare={this.props.colSquare}
        height={this.props.height}
        margin={this.props.margin}
        flex={this.props.flex}
        animated={this.props.animated}
        col={this.state.params.col}
        colHidden={this.props.colHidden}
        style={(!this.props.style ? {} : this.props.style)}
        onLayout={(evt) => {
          this.layout = evt.nativeEvent.layout;
          if (this.props.onLayout) this.props.onLayout(evt);
        }}>
        <Element
          {...otherProps}
          style={{
            width: "100%",
            ...(this.state.params.dir != "row" ? {} : {
              flexDirection: "row",
              flexWrap: 'wrap',
              // alignContent: "flex-start",
            }),
            ...(!this.props.backgroundColor ? {} : {
              backgroundColor: this.props.backgroundColor
            }),
            ...(!this.props.row ? {} : {
              flexDirection: "row",
              flexWrap: 'wrap',
            }),
            ...(!this.props.colSquare ? {} : { height: "100%" }),
            ...(Platform.OS != "web" ? (this.props.height ? { flex: 1, } : {}) : { height: "100%" }),
            ...(!this.props.center ? {

            } : {
              alignItems: 'center',
              justifyContent: 'center',
            }),
            ...(!this.props.flex ? {} : {
              flex: this.props.flex == true ? 1 : this.props.flex
            }),

            ...(!this.props.width ? {} : {
              width: this.props.width == true ? "100%" : this.props.width
            }),
            ...(!this.props.border ? {} : {
              borderWidth: 1,
              borderColor: this.props.border,
            }),
            ...(this.props.card ? { borderRadius: 4, backgroundColor: STheme.color.card } : {}),
            ...(this.props.borderRadius ? { borderRadius: this.props.borderRadius } : {}),
            ...(this.props.br ? { borderRadius: this.props.br } : {}),
            ...(this.props.padding ? { padding: this.props.padding } : {}),
            ...style
          }}>
          {this.props.children}
        </Element>
      </SGrid>
    );

  }
}
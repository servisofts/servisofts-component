import React, { Component } from 'react';
import { View, Text, ViewStyle, TouchableOpacity, Animated, ViewProps, TouchableOpacityProps } from 'react-native';
import { SColType, SDirectionType } from '../../Types/index';
import SGrid from '../SGrid/index';


export type SViewProps = {
  col?: SColType,
  dir?: SDirectionType,
  row?: boolean,
  // props?: SViewProps,
  data?: any,
  style?: any,
  onPress?: Function,
  colSquare?: boolean,
  center?: boolean,
  animated?: boolean,
  backgroundColor?: string,
  flex?: Number | boolean,
  height?: Number | boolean | string,
  width?: Number | boolean | string,
  withoutFeedback?: Boolean
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
  render() {

   
    var otherProps: any = {};
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
    var style = {...this.props.style};
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
    }
    return (
      <SGrid
        colSquare={this.props.colSquare}
        height={this.props.height}
        flex={this.props.flex}
        col={this.state.params.col}
        style={(!this.props.style ? {} : this.props.style) }
        onLayout={(evt) => {
          this.layout = evt.nativeEvent.layout;
          if (this.props.onLayout) this.props.onLayout(evt);
        }}>
        <Element
          {...otherProps}
          {...this.props}

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
            height: "100%",
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
            ...style
          }}>
          {this.props.children}
        </Element>
      </SGrid>
    );

  }
}
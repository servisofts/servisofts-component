import React, { Component } from 'react';
import { View, Text, ViewStyle, TouchableOpacity, Animated, ViewProps } from 'react-native';
import { SColType, SDirectionType } from '../../Types/index';
import SGrid from '../SGrid/index';


export type SViewProps = {
  col?: SColType,
  dir?: SDirectionType,
  row?: boolean,
  // props?: SViewProps,
  style?: any,
  onPress?: Function,
  colSquare?: boolean,
  center?: boolean,
  animated?: boolean,
  backgroundColor?: string,
  flex?: Number | boolean
} & ViewProps & any

export default class SView extends Component<SViewProps> {
  state: any;
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
  getData() {
    return this.props.data;
  }
  render() {
    var Element: any = View;
    if (this.props.onPress) {
      Element = TouchableOpacity;
    }
    if (this.props.animated) {
      Element = Animated.createAnimatedComponent(Element);
    }
    return (
      <SGrid colSquare={this.props.colSquare} col={this.state.params.col} style={this.state.params.style}>
        <Element
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
            ...(!this.props.colSquare ? {} : {
              height: "100%",
            }),
            ...(!this.props.center ? {

            } : {
              alignItems: 'center',
              justifyContent: 'center',
            }),
            ...(!this.props.flex ? {} : {
              flex: this.props.flex == true ? 1 : this.props.flex
            }),
            ...(!this.state.params.style ? {} : this.state.params.style),
            ...this.props.style
          }}>
          {this.props.children}
        </Element>
      </SGrid>
    );

  }
}
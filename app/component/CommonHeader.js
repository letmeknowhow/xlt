/**
 *  Class: CommonHeader
 *  Author: Niu Xiaoyu
 *  Date: 16/4/6.
 *  Description:
 */
import React, { Component } from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, Platform, Dimensions} from 'react-native';
const Actions = require('react-native-router-flux').Actions;
//style
import NativeTachyons from 'react-native-style-tachyons';
import {styles as s} from 'react-native-style-tachyons';
import Button from './Button';
const BACK_ICON = require('../../assets/home/2X/back_icon.png');

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
NativeTachyons.build({
  /* REM parameter it optional, default is 16 */
  rem: deviceWidth > 340 ? 12 : 10
}, StyleSheet);

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3492ea',
    height: Platform.OS === 'ios' ? 60 : 44,
    paddingTop: Platform.OS === 'ios' ? 15 : 0
  },
  back_button: {
    flex: 1,
    width: 60,
    height: 44,
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 0
  },
  resizeMode: {
    flex: 1,
    width: 30,
    height: 30,
    marginTop: Platform.OS === 'ios' ? 0 : 0
  },
  testColor: {
    flex: 3,
    fontSize: 20,
    textAlign: 'center',
    color: '#fff'
  }
});
export default class CommonHeader extends Component {
  // 属性类型
  static propTypes = {
    title: React.PropTypes.string,
    leftButtonHide: React.PropTypes.bool
  };

  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    let rightButton;
    if (this.props.rightButtonIcon) {
      rightButton = (
        <Button style={[styles.back_button]}
                onPress={this.props.rightButtonFun}>
          <Image
            style={[styles.resizeMode, {marginLeft: 30, width: 40, height: 40}]}
            resizeMode={Image.resizeMode.contain}
            source={this.props.rightButtonIcon}/>
        </Button>
      );
    }

    let leftButton;
    if (this.props.leftButtonHide) {
      leftButton = null;
    } else {
      leftButton = (
        <Button style={styles.back_button} onPress={Actions.pop} >
          <Image
            style={styles.resizeMode}
            resizeMode={Image.resizeMode.contain}
            source={BACK_ICON}/>
        </Button>
      );
    }

    return (
      <View style={styles.page}>
        <View style={{flex: 1, padding: 0, margin: 0}}>
          {leftButton}
        </View>
        <Text style={styles.testColor}>
          {this.props.title}
        </Text>
        <View style={{flex: 1, padding: 0, margin: 0}}>
          {rightButton}
        </View>
      </View>
    );
  }
}
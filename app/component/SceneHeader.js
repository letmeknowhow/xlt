/**
 *  Class: SceneHeader
 *  Author: Niu Xiaoyu
 *  Date: 16/8/12.
 *  Description:
 */
import React, { Component } from 'react';

import { View, Image, Text, TouchableOpacity, StyleSheet, Platform, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

//style
import NativeTachyons from 'react-native-style-tachyons';
import {styles as s} from 'react-native-style-tachyons';
NativeTachyons.build({
  /* REM parameter it optional, default is 16 */
  rem: deviceWidth > 340 ? 12 : 10
}, StyleSheet);

const logo = require('../../assets/logo_text.png');

const styles = StyleSheet.create(
  {
    items: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer: {
      height: Platform.OS === 'ios' ? 60 : 44,
      backgroundColor: '#4697f2',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: Platform.OS === 'ios' ? 20 : 0,
      flexDirection: 'row',
      paddingHorizontal: 5
    },
    logo: {
      height: 30
    },
    testColor: {
      color: '#fff',
      fontSize: 20,
    },
    resizeMode: {
      width: 30,
      height: 30,
      borderWidth: 0,
      marginTop: Platform.OS === 'ios' ? 0 : 0
    },
  }
);

export default class SceneHeader extends Component {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    let rightButton;
    let left;
    if (this.props.rightButtonIcon) {
      rightButton = (
        <TouchableOpacity style={{width: 30, alignItems: 'center', backgroundColor: 'transparent'}}
                          onPress={this.props.rightButtonFun}>
          <Image
            style={[styles.resizeMode, this.props.styleR]}
            resizeMode={Image.resizeMode.contain}
            source={this.props.rightButtonIcon}/>
        </TouchableOpacity>
      );
      left = (
        <TouchableOpacity style={{width: 30, alignItems: 'center', backgroundColor: 'transparent'}}
                          />
      );
    }
    const item = this.props.title ?
      (<View style={[styles.items, {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}]}>
        <Text style={[s.f3, styles.testColor] }>{this.props.title}</Text>
      </View>)
      : (<Image style={[styles.items, styles.logo, {resizeMode: Image.resizeMode.contain}]} source={logo}/>);
    return (
      <View style={styles.logoContainer}>
        {left}
        {item}
        {rightButton}
      </View>

    );
  }
}

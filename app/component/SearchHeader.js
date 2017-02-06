/**
 *  Class: SearchHeader
 *  Author: wangshuang
 *  Date: 16/12/02.
 *  Description: 带搜索的头部
 */
import React, { Component } from 'react';

import { View, Text, StyleSheet, Image, Platform, Dimensions, TextInput} from 'react-native';
const Actions = require('react-native-router-flux').Actions;
//style
import NativeTachyons from 'react-native-style-tachyons';
import {styles as s} from 'react-native-style-tachyons';
import Button from './Button';
const BACK_ICON = require('../../assets/home/2X/back_icon.png');

const deviceWidth = Dimensions.get('window').width;
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
export default class SearchHeader extends Component {
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
                onPress={() => {}}>
          <Text style={{textAlign: 'center', color: '#fff'}}>{this.props.rightButtonIcon}</Text>
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
    let headerText;
    if(this.props.headerText){
      headerText=(
        <View style={{flexDirection:'row',flex:1}}>
          <Button style={{flex:1}}>
            <Text style={{textAlign: 'center', color: '#fff'}}>始发地</Text>

          </Button>
          <View style={{height:'10',width:'1',backgroundColor:'#f1f1f1'}}/>
          <Button style={{flex:4}} >

            <Text style={{textAlign: 'center', color: '#fff'}}>目的地</Text>
          </Button>
        </View>
      );
    }else{
      headerText=null;
    }

    return (
      <View style={styles.page}>
        <View style={{flex: 1, padding: 0, margin: 0}}>
          {leftButton}
        </View>
        <TextInput
          style={{flex: 4, height: 40, textAlign: 'center', backgroundColor: '#fff', fontSize: 13, borderRadius: 8}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder={this.props.placeholder}
          underlineColorAndroid="transparent"
        >
          {headerText}
        </TextInput>
        <View style={{flex: 1, padding: 0, margin: 0}}>
          {rightButton}
        </View>
      </View>
    );
  }
}

import React, {Component} from 'react';
import {View, StyleSheet, Platform, Alert, BackAndroid, Dimensions, Text, NativeModules} from 'react-native';
import {Actions} from 'react-native-router-flux';
import NativeTachyons, {styles as s} from 'react-native-style-tachyons';

//import AndroidExitApp from '../component/AndroidExitApp';
import RouterConfig from '../config/RouterConfig';

import * as WeChat from 'react-native-wechat';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal1: {
    height: 300
  },
  modal2: {
    height: deviceHeight,
    position: 'relative',
    justifyContent: 'center',
  },
  progress: {
    margin: 10
  },
  image: {}
});

if (Platform.OS === 'android') {
  BackAndroid.addEventListener('hardwareBackPress', () => {
    try {
      Actions.pop();
    } catch (err) {
      //console.log(err);
      // Alert.alert('提示', '确定要退出应用吗?',
      //   [
      //     {text: '取消'},
      //     {text: '退出', onPress: () => BackAndroid.exitApp()}
      //   ]
      // );
      //AndroidExitApp.exitApp();
    }
    return true; // 返回true,不退出程序
  });
}

class Application extends Component {

  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  componentDidMount (){
    //WeChat.registerApp('wxb3bb2cf618808b08')
  }

  render() {
    return (
      <RouterConfig />
    );
  }
}
export default Application;

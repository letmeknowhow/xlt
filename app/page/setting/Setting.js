/**
 *  Class: container
 *  Author: Guo Lixin
 *  Date: 16/9/22
 *  Description: 我的
 */
const wechat = require('../../../assets/share/wechat.png');
const timeline = require('../../../assets/share/timeline.png');
import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  DeviceEventEmitter,
  Alert
} from 'react-native';
import Communications from 'react-native-communications'; //拨打电话
import * as WeChat from 'react-native-wechat';
let resolveAssetSource = require('resolveAssetSource');
import SceneHeader from '../../component/SceneHeader';
import Button from '../../component/Button';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create(
  {
    page: {
      flex: 1,
      backgroundColor: '#fff'
    },
    button: {
      flex: 1,
      marginBottom: 0,
      borderWidth: 0,
      height: 80,
      borderRadius: 0,
      overflow: 'hidden'
    },
    loginButton: {
      flex: 1,
      height: 55,
      marginBottom: 5,
      borderWidth: 0,
      borderRadius: 0,
      overflow: 'hidden'
    },
    textBox: {
      overflow: 'hidden',
      borderColor: '#fff',
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 4,
      marginBottom: 10,
      paddingHorizontal: 10
    },
    exit: {
      borderWidth: 1,
      borderColor: '#3492ea',
      marginLeft: 10,
      marginRight: 10,
      height: 45,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      marginBottom: 70,
      // position: 'relative',
      // bottom: -50
    },
    currentStoreDataSourceRow: {
      flex: 1
      //flexDirection: 'row',
      //height: 50,
      //width: 50,
      //marginBottom: 10,

    },
    buttonLinkman: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 22,
      //flex: 1,
      borderRadius: 5,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 10
    },
  }
);

export default class Mine extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
    this.openWXSessionApp = this.openWXSessionApp.bind(this);
  }

  render() {

    return (
      <View style={[styles.page]}>
        <SceneHeader title="我的"/>
        <View style={{width: deviceWidth, height: 170, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Text>用手机扫描下面的二维码安装</Text>
          <Image style={{width: 100, height: 100, marginTop: 10}} source={require('../../../assets/startOne/app-qrcode-startone.png')} />
        </View>
        <View style={{width: deviceWidth, height: 50, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{width: deviceWidth, height: 50, textAlign: 'center'}}>https://www.pgyer.com/startone</Text>
          <View style={[styles.currentStoreDataSourceRow]}>
            <TouchableOpacity
              style={[styles.buttonLinkman]}
              onPress={() => this.sendMessage('星旅通演示应用地址: https://www.pgyer.com/startone')}
            >
              <Text>短信分享</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonLinkman]}
              onPress={() => {this.openWXSessionApp(true); }}
            >
              <Text>微信分享下载地址</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonLinkman]}
              onPress={() => {this.openWXSessionApp(); }}
            >
              <Text>微信分享二维码</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  sendMessage(text) {
    Communications.text(null, text);
  }

  async openWXSessionApp(add) {
    let shareData = {
      type: 'text',
      description: '星旅通演示应用地址: https://www.pgyer.com/startone'
    };
    if(!add) {
      let imageResource = require('../../../assets/startOne/app-qrcode-startone.png');

      shareData = {
        type: 'imageResource',
        title: '星旅通',
        description: '星旅通演示应用地址: https://www.pgyer.com/startone',
        mediaTagName: 'email signature',
        messageAction: undefined,
        messageExt: undefined,
        imageUrl: resolveAssetSource(imageResource).uri
      };
    }
    try {
      await WeChat.shareToSession(shareData);
    }
    catch (e) {
      console.log('share text message to time line failed', e);
      //this.setState({
      //  exception: e,
      //  modalVisible: true
      //});
    }
  }
}
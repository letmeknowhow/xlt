/**
 *  Class: container
 *  Author: Guo Lixin
 *  Date: 16/9/22
 *  Description: 我的
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  DeviceEventEmitter,
  Alert
} from 'react-native';
import SceneHeader from '../../component/SceneHeader';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create(
  {
    page: {
      flex: 1,
      backgroundColor: '#fff'
    },
  }
);

export default class Setting extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = { };
  }

  render() {

    return (
      <View style={[styles.page]}>
        <SceneHeader title="账户"/>

      </View>
    );
  }
}
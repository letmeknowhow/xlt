/**
 *  Class: container
 *  Author: Niu Xiaoyu
 *  Date: 16/5/11.
 *  Description:
 */
import React, { Component } from 'react';

import { View, Text, StyleSheet, Platform, Image } from 'react-native';
import CommonHeader from '../../component/CommonHeader';

const styles = StyleSheet.create(
  {
    page: {
      flex: 1,
      backgroundColor: '#fff'
    }
  }
);

export default class JourneyHome extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  render() {
    console.log(this.props.data);
    return (
      <View style={styles.page}>
        <CommonHeader title={this.props.data} />
      </View>
    );
  }
}
/**
 *  Class: Banner
 *  Author: Niu Xiaoyu
 *  Date: 16/3/31.
 *  Description: 轮播图
 */
import React, { Component } from 'react';
import { Dimensions, View, Image, TouchableWithoutFeedback, Platform, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
const Actions = require('react-native-router-flux').Actions;

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  banner: {
    overflow: 'hidden',
    //marginBottom: 10,
    backgroundColor: '#FFF'
  },
  dot: {
    bottom: 15,
  }
});

class Banner extends Component {

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      source: props.source || []
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      source: props.source
    });
  }

  //use swiper start
  render() {
    if (this.state.source && this.state.source.length === 0) {
      return (
        <View style={this.props.style}>
          <Image
              key={0}
              source={require('../../assets/home/2X/ListdefaultImage.jpg')}
              style={{width: deviceWidth, height: this.props.height, backgroundColor: 'transparent'}}/>
        </View>
      );
    }
    let ImageBox = this.renderHot(this.state.source);
    return (
      <TouchableWithoutFeedback style={this.props.style} onPress={this.props.fn}>
        <Swiper autoplay={true} height={this.props.height} autoplayTimeout={5} paginationStyle={styles.dot}>
          {ImageBox}
        </Swiper>
      </TouchableWithoutFeedback>
    );
  }
  renderHot(source) {
    if (source && source.constructor == Array && source.length > 0) {
      return source.map((item, index) => {
        let imageSource;
        if (typeof item.picUrl === 'string') {
          imageSource = {uri: item.picUrl};
        } else {
          imageSource = item.picUrl;
        }
        return (
          <Image
            key={index}
            source={imageSource}
            style={{width: deviceWidth, height: this.props.height, resizeMode: Image.resizeMode.stretch}}/>
        );
      });
    } else {
      return (
        <View style={this.props.style}>
          <Image
              key={0}
              source={require('../../assets/home/2X/ListdefaultImage.jpg')}
              style={{width: deviceWidth, height: this.props.height, backgroundColor: 'transparent'}}/>
        </View>
      );
    }
  }
  //use swiper end
}

export default Banner;

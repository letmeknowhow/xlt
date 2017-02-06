/**
 *  Class: container
 *  Author: Niu Xiaoyu
 *  Date: 16/5/11.
 *  Description:
 */
const MockData = [
  {id: 0, text: '旅行', uri: require('../../../assets/startOne/icon/journey_icon_home@3x.png'), color: '#ef5a4a'},
  {id: 1, text: '景区', uri: require('../../../assets/startOne/icon/scenic_spot_icon_home@3x.png'), color: '#ff729f'},
  {id: 2, text: '酒店', uri: require('../../../assets/startOne/icon/hotel_icon_home@3x.png'), color: '#0e86ad'},
  {id: 3, text: '保险', uri: require('../../../assets/startOne/icon/insurance_icon_home@3x.png'), color: '#2cbf24'},
  {id: 4, text: '消费', uri: require('../../../assets/startOne/icon/consumption_icon_home.png'), color: '#0fa3b1'},
  {id: 5, text: '小贷', uri: require('../../../assets/startOne/icon/loan_icon_home.png'), color: '#ffa630'}
];
import React, { Component } from 'react';

import { View, Text, StyleSheet, Platform, Image, TouchableOpacity } from 'react-native';
import SceneHeader from '../../component/SceneHeader';
import ButtonList from '../../component/ButtonList';
import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create(
  {
    page: {
      flex: 1,
      backgroundColor: '#fff'
    },
    button: {
      height: 50,
      borderWidth: 0,
      borderBottomWidth: 1,
      borderColor: '#E7E7E7',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#FFF',
      paddingHorizontal: 15
    },
    icon: {
      height: 25,
      width: 25,
      marginRight: 20,
      resizeMode: 'cover',
    }
  }
);

export default class Container extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
    this.renderButton = this.renderButton.bind(this);
  }

  render() {
    return (
      <View style={styles.page}>
        <SceneHeader title="订单" />
        <ButtonList style={{flex: 1}} buttons={MockData} renderButton={this.renderButton} />
      </View>
    );
  }

  renderButton(button) {
    return (
      <TouchableOpacity key={button.id} style={[styles.button]}
                        onPress={() => this.getAction(button.text)}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {button.uri && <Image style={[styles.icon, button.color && {tintColor : button.color}]} source={button.uri}/>}
          <Text style={{fontSize: 16}}>{button.text}</Text>
        </View>
        <Text>{'>'}</Text>
      </TouchableOpacity>
    );
  }

  getAction(button) {
    let action;
    switch (button) {
      case '旅行':
        Actions.journeyOrder({data: '旅行订单'});
        break;
      case '景区':

        break;
      case '酒店':

        break;
      default:
    }
    return action;
  }
}
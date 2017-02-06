/**
 * Created by wangshuang on 16/12/7.
 * Description: 预订成功
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Platform,
  Image,
  ScrollView,
  TouchableOpacity,
  PixelRatio
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import CommonHeader from '../../component/CommonHeader';
import Button from '../../component/Button';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
//style
import NativeTachyons, {styles as s} from 'react-native-style-tachyons';
NativeTachyons.build({
  /* REM parameter it optional, default is 16 */
  rem: deviceWidth > 340 ? 12 : 10
}, StyleSheet);

// 样式定义
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8'
  },
  page: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderColor: '#ccc',
    borderBottomWidth: 1 / PixelRatio.get()
  },
  colorBlack: {
    color: '#000'
  },
  bottomLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderStyle: 'dotted'
  },
  bookRoom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 36
  },
  size10: {
    fontSize: 10,
    color: '#ccc'
  },
  dataItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 80,
    paddingVertical: 10,
    borderColor: '#ccc',
    borderBottomWidth: 1 / PixelRatio.get(),
  },
  orderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    backgroundColor: '#fff',
    height: 45
  },
  orderContentItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    paddingHorizontal: 10
  },
  orderIcon: {
    width: 5,
    height: 15,
    backgroundColor: '#3492ea',
    borderRadius: 3
  },
  orderTitle: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#121212'
  },
});


export default class BookSuccess extends Component {
// 默认属性

  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <View style={styles.container}>
        <CommonHeader title="订单详情"/>
        <View style={{height: deviceHeight}}>
          <View style={[styles.page]}>
            <View style={styles.dataItem}>
              <Image
                style={{width: 60, height: 60, marginRight: 10}}
                source={require('../../../assets/hotelImg/room1.jpg')}
              />
              <View style={{flex: 3, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'}}>
                  <Text style={{flex: 1, color: '#333', fontSize: 14}}>北京港中旅维景国际豪华大床房</Text>
                  <Text style={{fontSize: 10}}>¥<Text style={{color: '#ff9b01', fontSize: 14}}>150</Text></Text>
                </View>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 10}}>
              <View style={{flex: 1, borderRightWidth: 1, borderColor: '#ccc'}}>
                <Text style={{textAlign: 'center'}}>再来一单</Text>
              </View>
              <View style={{flex: 1, borderRightWidth: 1, borderColor: '#ccc'}}>
                <Text style={{textAlign: 'center'}}>退订</Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={{textAlign: 'center'}}>去点评</Text>
              </View>
            </View>
          </View>
          <View style={[{flex: 1, marginTop: 10, backgroundColor: '#fff'}]}>
            <View style={styles.orderContent}>
              <View style={styles.orderIcon}/>
              <Text style={styles.orderTitle}>使用方式</Text>
            </View>
            <View style={[styles.page, {borderBottomWidth: 0}]}>
              <View style={[styles.dataItem, {height: 45}]}>
                <Text style={{flex: 1, color: '#666'}}>有效日期</Text>
                <Text style={{flex: 3, color: '#333', fontSize: 14}}>2016-11-12当日</Text>
              </View>
              <View style={[styles.dataItem, {alignItems: 'flex-start', height: 120}]}>
                <Text style={{flex: 1, color: '#666'}}>二维码</Text>
                <View style={{flex: 3}}>
                  <Image style={{width: 100, height: 100}} source={require('../../../assets/hotelImg/QRcode.png')}/>
                </View>
              </View>
              <View style={[styles.dataItem, {height: 36, borderBottomWidth: 0, paddingTop: 10}]}>
                <Text style={{flex: 1, color: '#666'}}>酒店地址</Text>
                <Text style={{flex: 3, color: '#333', fontSize: 14}}>北京广安门内大街338号</Text>
              </View>
              <View style={[styles.dataItem, {height: 30, borderBottomWidth: 0}]}>
                <Text style={{flex: 1, color: '#666'}}>入住方式</Text>
                <Text style={{flex: 3, color: '#333', fontSize: 14}}>请凭二代身份证在合适时间到酒店大堂办理入住</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

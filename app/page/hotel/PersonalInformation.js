/**
 * Created by wangshuang on 16/12/6.
 * Description: 填写个人信息
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
    padding: 10,
    paddingBottom: 0,
    borderColor: '#ccc',
    borderBottomWidth: 1 / PixelRatio.get()
  },
  transparentS: {
    borderColor: 'transparent'
  },
  buttonB: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#3492ea',
    height: 45,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: deviceWidth - 40,
  },
  colorBlack: {
    color: '#000'
  },
  bottomLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
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
    height: 40,
    borderColor: '#ccc',
    borderBottomWidth: 1 / PixelRatio.get()
  }
});


export default class PersonalInformation extends Component {
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
        <CommonHeader title="港中旅维景国际大酒店"/>
        <ScrollView>
          <View style={{backgroundColor: '#3492ea', padding: 6}}>
            <View style={{backgroundColor: '#fff', borderRadius: 5, padding: 10}}>
              <Text style={{fontSize: 14, color: '#333', paddingVertical: 5}}>11月30日 - 12月1日 共1晚 <Text style={{fontSize: 10}}>目的地时间</Text> </Text>
              <Text style={{fontSize: 14, color: '#333', paddingVertical: 5}}>高级大床房</Text>
              <Text style={{fontSize: 12, color: '#999', paddingVertical: 5}}>大床 | 每间最多可住2人 | 免费Wi-Fi | 免费宽带 | 无早餐</Text>
            </View>
          </View>
          <View style={styles.page}>
            <View style={styles.dataItem}>
              <Text style={{flex: 1, color: '#666'}}>房间数</Text>
              <View style={{flex: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <TextInput style={{flex: 1, color: '#333', fontSize: 14}}
                           placeholder="1间"
                           placeholderTextColor="#555"
                           underlineColorAndroid="transparent"
                />
                <Image style={{width: 9, height: 16, marginLeft: 10}} source={require('../../../assets/home/2X/right_btn.png')}/>
              </View>
            </View>
            <View style={styles.dataItem}>
              <Text style={{flex: 1, color: '#666'}}>入住人</Text>
              <View style={{flex: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <TextInput style={{flex: 1, color: '#333', fontSize: 14}}
                           placeholder="入住人姓名"
                           placeholderTextColor="#555"
                           underlineColorAndroid="transparent"
                />
                <Image style={{width: 16, height: 16, marginLeft: 10}} source={require('../../../assets/home/2X/jiahao.png')}/>
              </View>
            </View>
            <View style={styles.dataItem}>
              <Text style={{flex: 1, color: '#666'}}>手机号</Text>
              <TextInput style={{flex: 2, color: '#333', fontSize: 14}}
                         placeholder="用户接收预订信息"
                         placeholderTextColor="#555"
                         underlineColorAndroid="transparent"
              />
            </View>
            <View style={[styles.dataItem, {borderBottomWidth: 0}]}>
              <Text style={{flex: 1, color: '#666'}}>预订时间</Text>
              <View style={{flex: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <TextInput style={{flex: 2, color: '#333', fontSize: 14}}
                           placeholder="入住时间"
                           placeholderTextColor="#555"
                           underlineColorAndroid="transparent"
                />
                <Image style={{width: 9, height: 16, marginLeft: 10}} source={require('../../../assets/home/2X/right_btn.png')}/>
              </View>
            </View>
          </View>
          <View style={[styles.page, {paddingTop: 0, marginTop: 10}]}>
            <View style={[styles.dataItem]}>
              <Text style={{flex: 1, color: '#666'}}>发票</Text>
              <Text style={{flex: 2, color: '#333'}}>请到酒店前台索取发票</Text>
            </View>
          </View>
          <View style={{margin: 20}}>
            <Text style={{fontSize: 12, color: '#aaa'}}><Text style={{fontSize: 12, color: '#888'}}>预订说明: </Text>如需自助餐, 可咨询酒店前台, 金额为每人每天40.00CNR, 由前台收取</Text>
          </View>
        </ScrollView>

        <View style={{height: 40, flexDirection: 'row', backgroundColor: '#fff', borderColor: '#eee', borderTopWidth: 1, paddingLeft: 20}}>
          <View style={{flex: 2, alignItems: 'flex-start', justifyContent: 'center'}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 10, height: 20}}>
              <Text style={{flex: 1, fontSize: 10, color: '#999'}}>到店支付 <Text style={{fontSize: 15, color: '#ff5345'}}><Text style={{fontSize: 9}}>¥</Text>550</Text> </Text>
              <Text style={{flex: 1, textAlign: 'right', fontSize: 8}}>明细
              </Text>
              <Image style={{width: 8, height: 8, marginLeft: 5, tintColor: '#999'}} source={require('../../../assets/home/2X/up_arrow.png')}/>
            </View>
          </View>
          <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ff5345'}} onPress={Actions.bookSuccess}>
            <Text style={{color: '#fff'}}>提交订单</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
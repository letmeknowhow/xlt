/**
 * Created by wangshuang on 16/12/5.
 * Description: 酒店查询
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
    margin: 10,
    paddingHorizontal: 10
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
  }
});


export default class HotelSearch extends Component {
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
        <CommonHeader title="酒店查询"/>
        <View style={[styles.page]}>
          <View style={[styles.bottomLine, {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 40}]}>
            <TextInput
              style={{width: 150}}
              defaultValue="上海"
              underlineColorAndroid="transparent"
            />
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Image style={{width: 9, height: 16}} source={require('../../../assets/home/2X/right_btn.png')}/>
              <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#1296ac', marginLeft: 20, paddingTop: 2}}>
                <Image style={{width: 16, height: 16}} source={require('../../../assets/home/2X/position.png')}/>
                <Text style={{fontSize: 8, color: '#1296ac', paddingBottom: 2}}> 我的位置 </Text>
              </View>
            </View>

          </View>

          <View style={[styles.bottomLine, {flex: 1, flexDirection: 'row'}]}>
            <View style={{flex: 2, justifyContent: 'center',
              alignItems: 'flex-start'}}>
              <Text style={styles.colorBlack}>12月07号 <Text style={styles.size10}> 周三 入住</Text></Text>
              <Text style={styles.colorBlack}>12月15号 <Text style={styles.size10}> 周四 离店</Text></Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center',
              alignItems: 'flex-start'}}>
              <Text style={styles.size10}>共<Text>8</Text>晚</Text>
            </View>
            <View style={{flex: 2, justifyContent: 'center',
              alignItems: 'flex-end'}}>
              <Image style={{width: 9, height: 16}} source={require('../../../assets/home/2X/right_btn.png')}/>
            </View>
          </View>
          <View style={styles.bottomLine}>
            <TextInput
              style={{height: 40, fontSize: 15}}
              placeholder="关键字/位置/品牌/酒店名"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.bottomLine}>
            <TextInput
              style={{height: 40, fontSize: 15}}
              placeholder="价格/星级"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.buttonB}>
            <Button style={[styles.transparentS, styles.button]} onPress={Actions.hotelList}>
              <Text style={{color: 'white'}}>搜索</Text>
            </Button>
          </View>
        </View>
        <TouchableOpacity style={[styles.page, styles.bookRoom]} onPress={Actions.orderDetail}>
          <Text>我的入住</Text>
          <Image style={{width: 9, height: 16}} source={require('../../../assets/home/2X/right_btn.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.page, styles.bookRoom]} onPress={Actions.checkoutRoom}>
          <Text>我要退房</Text>
          <Image style={{width: 9, height: 16}} source={require('../../../assets/home/2X/right_btn.png')}/>
        </TouchableOpacity>
      </View>
    );
  }
}

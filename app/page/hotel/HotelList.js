/**
 * Created by wangshuang on 16/12/2.
 * Description: 酒店列表
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  TextInput,
  StyleSheet,
  InteractionManager,
  Dimensions,
  Platform,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import SearchHeader from '../../component/SearchHeader';
// import Button from '../../component/Button';

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
  flexAll: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  flexL: {
    flex: 1.5,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: 10
  },
  flexR: {
    flex: 3.5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: 5,
    paddingTop: 5
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  comment: {
    fontSize: 12,
    color: '#999',
  },
  score: {
    color: '#13b3ff',
  },
  lineHeight: {
    paddingTop: Platform.OS === 'ios' ? 3 : 2,
    paddingBottom: Platform.OS === 'ios' ? 3 : 2,
  },
  price: {
    position: 'absolute',
    right: 10,
    bottom: Platform.OS === 'ios' ? 7 : 6,
  }
});
const data = [
  {hotelName: '北京维景国际大酒店', hotelScore: '4.6', hotelDes: '超棒', hotelNum: '3376', hotelStart: '五星级', hotelDistance: '250', hotelCondition: '亲子', hotelTime: '半小时前', hotelPrice: '2259', img: require('../../../assets/hotelImg/1.jpg')},
  {hotelName: '家美世界城酒店公寓 (北京世贸店)', hotelScore: '4.5', hotelDes: '很好', hotelNum: '594', hotelStart: '经济型', hotelDistance: '300', hotelCondition: '房间很好', hotelTime: '一天前', hotelPrice: '500', img: require('../../../assets/hotelImg/2.jpg')},
  {hotelName: '世界城国际服务公寓 (北京世贸店)', hotelScore: '4.6', hotelDes: '超棒', hotelNum: '189', hotelStart: '舒适型', hotelDistance: '300', hotelCondition: '干净卫生', hotelTime: '13小时前', hotelPrice: '532', img: require('../../../assets/hotelImg/3.jpg')},
  {hotelName: 'Poseidon Manor服务式公寓(北京世贸店)', hotelScore: '4.5', hotelDes: '很好', hotelNum: '180', hotelStart: '舒适型', hotelDistance: '300', hotelCondition: '服务好', hotelTime: '1小时前', hotelPrice: '520', img: require('../../../assets/hotelImg/4.jpg')},
  {hotelName: '北京嘉里大酒店', hotelScore: '4.8', hotelDes: '超棒', hotelNum: '3376', hotelStart: '五星级', hotelDistance: '250', hotelCondition: '亲子', hotelTime: '半小时前', hotelPrice: '2259', img: require('../../../assets/hotelImg/5.jpg')},
  {hotelName: '家美世界城酒店公寓 (北京世贸店)', hotelScore: '4.5', hotelDes: '很好', hotelNum: '594', hotelStart: '经济型', hotelDistance: '300', hotelCondition: '房间很好', hotelTime: '一天前', hotelPrice: '500', img: require('../../../assets/hotelImg/2.jpg')},
  {hotelName: '世界城国际服务公寓 (北京世贸店)', hotelScore: '4.6', hotelDes: '超棒', hotelNum: '189', hotelStart: '舒适型', hotelDistance: '300', hotelCondition: '干净卫生', hotelTime: '13小时前', hotelPrice: '532', img: require('../../../assets/hotelImg/3.jpg')},
  {hotelName: '家美世界城酒店公寓 (北京世贸店)', hotelScore: '4.5', hotelDes: '很好', hotelNum: '594', hotelStart: '经济型', hotelDistance: '300', hotelCondition: '房间很好', hotelTime: '一天前', hotelPrice: '500', img: require('../../../assets/hotelImg/2.jpg')},
  {hotelName: 'Poseidon Manor服务式公寓(北京世贸店)', hotelScore: '4.5', hotelDes: '很好', hotelNum: '180', hotelStart: '舒适型', hotelDistance: '300', hotelCondition: '服务好', hotelTime: '1小时前', hotelPrice: '520', img: require('../../../assets/hotelImg/4.jpg')},
  {hotelName: 'Poseidon Manor服务式公寓(北京世贸店)', hotelScore: '4.5', hotelDes: '很好', hotelNum: '180', hotelStart: '舒适型', hotelDistance: '300', hotelCondition: '服务好', hotelTime: '1小时前', hotelPrice: '520', img: require('../../../assets/hotelImg/4.jpg')},
  {hotelName: 'Poseidon Manor服务式公寓(北京世贸店)', hotelScore: '4.5', hotelDes: '很好', hotelNum: '180', hotelStart: '舒适型', hotelDistance: '300', hotelCondition: '服务好', hotelTime: '1小时前', hotelPrice: '520', img: require('../../../assets/hotelImg/4.jpg')},
];

export default class HotelList extends Component {
  // 默认属性

  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);

  }


  // 渲染
  render() {
    let hotelItem = data.map((item, index) => {
      return (
        <TouchableOpacity key={index} style={styles.flexAll} onPress={Actions.roomList}>
          <View style={styles.flexL}>
            <Image style={{width: deviceWidth * 0.29, height: 100}} source={item.img}/>
          </View>
          <View style={[styles.flexR, {position: 'relative'}]}>
            <Text style={[styles.title, styles.lineHeight, {paddingRight: 10}]} numberOfLines={1}>{item.hotelName}</Text>
            <Text style={[styles.comment, styles.lineHeight]}><Text style={[styles.title, styles.score]}>{item.hotelScore}</Text><Text style={[styles.score]}>分</Text> <Text style={[styles.title, styles.score]}>{item.hotelDes}</Text> {item.hotelNum}条点评 {item.hotelStart}</Text>
            <Text style={[styles.lineHeight, {fontSize: 12, color: '#999'}]}>据您{item.hotelDistance}米 · 北京 · 国贸CBD</Text>
            <Text style={[styles.lineHeight, {fontSize: 12, color: '#ff9b01'}]}>{item.hotelCondition} <Text style={[styles.lineHeight, {fontSize: 12, color: '#5cb412'}]}>最新预订:{item.hotelTime}</Text></Text>
            <View style={styles.price}>
              <Text style={[styles.title, styles.score, {color: '#ff9b01'}]}>¥{item.hotelPrice}<Text style={styles.comment}>起</Text></Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
    return (
      <View style={styles.container}>
        <SearchHeader rightButtonIcon="地图" placeholder="关键字/位置/品牌/酒店名"/>
        <ScrollView>{hotelItem}</ScrollView>
      </View>
    );
  }
}
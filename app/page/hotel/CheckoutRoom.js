/**
 * Class:
 * Author: kanily
 * Date: 16/12/6
 * Description:
 */
/**
 * Class: OrderedList
 * Author: kanily
 * Date: 16/12/6
 * Description:已预订列表
 */
import React, {Component} from 'react';
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
  ListView,
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
  flexAll: {
    flexDirection: 'row',
    height: 140,
    justifyContent: 'center',
    padding: 0,
    borderWidth: 0,
    borderColor: 'transparent',
    borderRadius: 0,
  },
  query: {
    //flex: 1,
    backgroundColor: '#3492ea',
    height: 55,
    fontSize: 16,
    width: deviceWidth - 20,
    // marginLeft: 10,
    // marginRight: 10,
    borderRadius: 5,
    alignItems: 'center',
    borderColor: 'transparent'
  },
  flexL: {
    flex: 1.5,
    justifyContent: 'center',
    marginTop: 0,
    height: 130,
    backgroundColor: '#fff',
  },
  flexR: {
    flex: 3.5,
    backgroundColor: 'white',
    //flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingLeft: 15,
    height: 130
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  fontSize: {
    fontSize: 14,
  },
  comment: {
    fontSize: 12,
    color: '#ccc',
  },
  score: {
    height: 30,
    lineHeight: 30,
    paddingLeft: 10,
    color: '#666',
  },
  lineHeight: {
    paddingTop: Platform.OS === 'ios' ? 3 : 2,
    paddingBottom: Platform.OS === 'ios' ? 3 : 2,
  },
  detail: {
    backgroundColor: 'white',
    flexDirection: 'column',
    //justifyContent: 'flex-',
    marginLeft: 0,
    paddingBottom: 10,
    //height: 130
  },
  olderStyle: {
    textAlign: 'right',
    height: 30,
    lineHeight: 30,
    color: '#666'
  },
  olderStyleTitle: {
    fontSize: 14,
    height: 30,
    // lineHeight: 30,
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 10,
    paddingTop: 10
  },
  hotelNameStyle:{
    height: 35,
    paddingTop: 10

    // lineHeight: 35,
  }
});
const data = [
  {
    hotelName: '北京港中旅维景国际大酒店',
    hotelType: '大床房',
    comeDate: '2016-12-03',
    address: '北京市广安门内大街338号',
    img: require('../../../assets/hotelImg/1.jpg')
  },
  {
    hotelName: '深圳港中旅维景大酒店',
    hotelType: '大床房',
    comeDate: '2016-12-06',
    address: '深圳市广安门内大街338号',
    img: require('../../../assets/hotelImg/2.jpg')
  }
];
const item = {
  hotelName: '北京港中旅维景国际大酒店',
  hotelType: '大床房',
  comeDate: '2016-12-03',
  address: '北京市广安门内大街338号',
  img: require('../../../assets/hotelImg/1.jpg')
};
export default class CheckoutRoom extends Component {
  // 默认属性

  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态

  }

  // 渲染
  render() {
    console.log(this.props.data);
    return (
      <View style={styles.container}>
        <CommonHeader title="我要退房"/>
        <View style={styles.flexAll}>
          <View style={styles.flexL}>
            <Image style={{width: deviceWidth * 0.29, height: 130,}} source={item.img}/>
          </View>
          <View style={styles.flexR}>
            <Text style={[styles.title, styles.hotelNameStyle]}
                  numberOfLines={1}>{item.hotelName}</Text>
            <Text style={[styles.title, styles.lineHeight]}>
              <Text style={[styles.score, styles.fontSize]}>类型:</Text>
              <Text style={[styles.score, styles.fontSize]}>{item.hotelType}</Text>
            </Text>
            <Text style={[styles.lineHeight, {fontSize: 14, color: '#999'}]}>入住时间:{item.comeDate}</Text>
            <Text style={[styles.lineHeight, {fontSize: 14, color: '#ff9b01'}]}>地址:{item.address}
            </Text>
          </View>
        </View>
        <View style={styles.detail}>
          <View style={{flexDirection: 'column'}}>
            <Text style={[styles.olderStyleTitle]}
                  numberOfLines={1}>订单信息
            </Text>
            <Text style={{height: 0.5, backgroundColor: '#ccc', marginLeft: 20, margnRight: 20,width: deviceWidth - 40,}}></Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent:'center',alignItems: 'center',}}>
            <View style={{flexDirection: 'column', flex: 1, justifyContent:'flex-end', paddingTop: 10}}>
                <Text style={[styles.olderStyle]}>订单号:</Text>
                <Text style={[styles.olderStyle]}>购买手机号:</Text>
                <Text style={[styles.olderStyle]}>付款时间:</Text>
                <Text style={[styles.olderStyle]}>入住时间:</Text>
                <Text style={[styles.olderStyle]}>数量:</Text>
                <Text style={[styles.olderStyle]}>总价:</Text>
            </View>
          <View style={{flexDirection: 'column',flex: 3, justifyContent:'flex-start', paddingTop: 10}}>
              <Text style={[styles.score]}>1234324214</Text>
              <Text style={[styles.score]}>131111111111</Text>
              <Text style={[styles.score]}>2016-11-30 16:35</Text>
              <Text style={[styles.score]}>2016-11-30 17:35</Text>
              <Text style={[styles.score]}>1</Text>
              <Text style={[styles.score]}>288</Text>
          </View>

          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 50, flexDirection: 'row'}}>
          <Button  style={styles.query}>
            <Text style={{textAlign: 'center', fontSize: 18, color: '#fff'}}>退  房</Text>
          </Button>
        </View>
      </View>
    );
  }
}
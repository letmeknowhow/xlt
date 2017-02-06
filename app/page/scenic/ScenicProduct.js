/**
 * Class:
 * Author: kanily
 * Date: 16/12/7
 * Description:
 */

import React, {Component} from 'react';

import {
  Alert,
  Dimensions,
  Image,
  InteractionManager,
  View,
  RefreshControl,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Platform
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Button from '../../component/Button';

const deviceWidth = Dimensions.get('window').width;
import Banner from '../../component/Banner';
import CommonHeader from '../../component/CommonHeader';


const styles = StyleSheet.create(
  {
    page: {
      flex: 1,
      backgroundColor: '#e8e8e8'
    },
    pageList: {
      backgroundColor: '#e8e8e8'
      //flexDirection: 'column',
    },
    back_button: {
      width: 60,
      height: 44,
      marginTop: 10,
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderWidth: 0,
      position: 'absolute',
    },
    resizeMode: {
      flex: 1,
      width: 30,
      height: 30,
      marginTop: Platform.OS === 'ios' ? 0 : 0
    },
    bannerTitleBox: {
      position: 'absolute',
      width: deviceWidth,
      top: 80,
      height: 50,
      // textAlign: 'center',
      backgroundColor: 'rgba(3, 3, 3, 0.4)',
    },
    bannerTitle: {
      fontSize: 24,
      color: '#fff',
      width: deviceWidth,
      textAlign: 'center',
      height: 50,
      marginTop: Platform.OS === 'ios' ? 15 : 10,
      fontWeight: 'bold'
    },
    tipListBox:{
      flexDirection: 'row',
      marginLeft: 20,
      marginRight: 10,
      paddingTop: 15,
      paddingBottom: 15,
      backgroundColor: '#fff'
    },
    tipListLine:{
      height: 0.5,
      backgroundColor: '#ccc',
    },
    tipList: {
      borderWidth: 0,
      width: deviceWidth - 40,
      margin: 0,
      padding: 0,
      borderTopWidth: 1,
      borderTopColor: '#ccc',
      marginHorizontal: 20
    },
    tipListTitle: {
      fontSize: 16,
      color: '#666',
      height: 40,
      width: deviceWidth,
      textAlign: 'left',
    },
    backColor: {
      backgroundColor: '#fff',
      // flex: 1,
      flexDirection: 'column',
    },
    shopIconTitle: {
      width: 6,
      backgroundColor: '#3492ea',
      borderRadius: 8,
      marginRight: 10,
      height: 18,
      marginTop: 2
    },

  }
);

const DATA = [
  {
    prodName: '【淡季票】',
    prodTitle: '河南省云台山景区成人票',
    desc: '可预订明日',
    type: '不支持退款',
    price: '40'
  },
  {
    prodName: '【提前订优惠】',
    prodTitle: '焦作云台山景区成人票',
    desc: '可预订明日',
    type: '不支持退款',
    price: '40'
  },
  {
    prodName: '【提前订优惠】',
    prodTitle: '焦作云台山景区承认票',
    desc: '可预订明日',
    type: '不支持退票',
    price: '465'
  },
  {
    prodName: '【提前订优惠】',
    prodTitle: '焦作云台山景区成人票',
    desc: '可订明日',
    type: '支持退款',
    price: '265'
  },
];

const HOTDATA = [
  {
    prodName: '【提前订优惠】',
    prodTitle: '焦作云台山景区成人票',
    desc: '可预订明日',
    type: '不支持退票',
    price: '465'
  },
  {
    prodName: '【提前订优惠】',
    prodTitle: '焦作云台山景区成人票',
    desc: '可订明日',
    type: '支持退款',
    price: '265'
  },
];

const MockUrl = require('../../../assets/travlPark/scence.jpg');
const BACK_ICON = require('../../../assets/home/2X/back_icon.png');


export default class ScenicProduct extends Component {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  static transfromData = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
  }

  // 渲染


  renderProdLists(source) {
    return source.map((item, index) => {
      return (
        <TouchableOpacity key={index} style={[styles.tipList, {height: 70, backgroundColor: '#fff'}]} onPress={Actions.scenicProductDetail}>
          <View style={{height: 35, paddingTop: 10}}>
            <Text style={[styles.tipListTitle]}>{item.prodName}{item.prodTitle}</Text>
          </View>
          <View style={{flexDirection: 'row', height: 35}}>
            <Text style={{flex: 1, textAlign: 'left', fontSize: 12, color: '#aaa', paddingTop: 5}}>{item.desc}  {item.type}</Text>
            <Text style={{flex: 1, textAlign: 'right', color: '#ff9b01', fontSize: 20,borderColor: 'transparent'}}>¥<Text>{item.price}</Text><Text style={{fontSize: 9, color: '#ccc'}}>起</Text></Text>
          </View>
        </TouchableOpacity>
      );
    });
  }

  render() {
    return (
      <View style={[styles.page]}>
        <ScrollView style={styles.pageList}>
          <View style={[styles.backColor]}>
            <Image
              source={MockUrl}

              autoPlay={true}
              style={{width: deviceWidth, height: 200}}
              resizeMode="cover"
            >
              <Button style={styles.back_button} onPress={Actions.pop}>
                <Image
                  style={styles.resizeMode}
                  resizeMode={Image.resizeMode.contain}
                  source={BACK_ICON}/>
              </Button>
            </Image>
            <View style={styles.bannerTitleBox}>
              <Text style={styles.bannerTitle}>少林寺</Text>
            </View>
          </View>
          <View style={[styles.backColor, {marginBottom: 10}]}>
            <View style={[styles.tipListBox]}>
              <View style={styles.shopIconTitle}>{}</View>
              <Text style={{color: '#121212', fontSize: 16}}>一日游</Text>
            </View>
            {this.renderProdLists(DATA)}
          </View>
          <View style={[styles.backColor]}>
            <View style={[styles.tipListBox]}>
              <View style={styles.shopIconTitle}>{}</View>
              <Text style={{color: '#121212', fontSize: 16}}>热销联票</Text>
            </View>
            {this.renderProdLists(HOTDATA)}
          </View>
        </ScrollView>
      </View>
    );
  }
}
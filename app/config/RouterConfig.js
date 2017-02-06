/**
 *  Class: RouterConfig
 *  Author: He jiaoyan
 *  Date: 16/11/21.
 *  Description:
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import {Scene, Router, TabBar, Schema, ActionConst } from 'react-native-router-flux';//model

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

/** 主tab 四页*/
import Home from '../page/home/Home';
import Order from '../page/order/Order';
import Account from '../page/account/Account';
import Setting from '../page/setting/Setting';

/** 旅行通 **/
import JourneyHome from '../page/journey/JourneyHome';
import ProductsList from '../page/journey/ProductsList';
import ProductsDetail from '../page/journey/ProductsDetail';

/** 酒店通 **/

/** 酒店查询 **/
import HotelSearch from '../page/hotel/HotelSearch';
/** 酒店列表 **/
import HotelList from '../page/hotel/HotelList';

/** 酒店已预订列表 **/
import OrderedList from '../page/hotel/OrderedList';

/** 退房 **/
import CheckoutRoom from '../page/hotel/CheckoutRoom';

/** 房间列表 **/
import RoomList from '../page/hotel/RoomList';
/** 房间详情 **/
import RoomDetail from '../page/hotel/RoomDetail';
/** 填写个人信息 **/
import PersonalInformation from '../page/hotel/PersonalInformation';
/** 预订成功 **/
import BookSuccess from '../page/hotel/BookSuccess';
/** 订单详情 **/
import OrderDetail from '../page/hotel/OrderDetail';

/** 景区通 **/
/** 游园 **/
import TravlPark from '../page/travlPark/TravlPark';
/** 游园详情 **/
import TravlParkDetail from '../page/travlPark/TravlParkDetail';
/** 景区通 **/
import ScenicProduct from '../page/scenic/ScenicProduct';
/** 景区产品列表 **/
import ScenicList from '../page/scenic/ScenicList';

/** 入园 **/
import InPark from '../page/inPark/InPark';
/** 订单 **/
import JourneyOrder from '../page/order/JourneyOrder';
/** 景区通 **/
import ScenicRegion from '../page/scenicRegion/ScenicRegion';
/** 景区订单详情 **/
import ScenicOrderDetail from '../page/scenicRegion/ScenicOrderDetail';
/** 景区产品详情 **/
import ScenicProductDetail from '../page/scenicRegion/ScenicProductDetail';
const TAB_TITLE_HOME = '功能';
const TAB_TITLE_ORDER = '订单';
const TAB_TITLE_ACCOUNT = '账户';
const TAB_TITLE_SETTING = '设置';

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#fff'
  }
});

class TabIcon extends React.Component {

  render() {
    let uri;
    switch (this.props.title) {
      case TAB_TITLE_HOME:
        uri = require('../../assets/startOne/icon/function_icon_home.png');
        break;
      case TAB_TITLE_ORDER:
        uri = require('../../assets/startOne/icon/order_icon_home.png');
        break;
      case TAB_TITLE_ACCOUNT:
        uri = require('../../assets/startOne/icon/account_data_icon_home.png');
        break;
      default:
        uri = require('../../assets/startOne/icon/setting_icon_home.png');
    }
    return (
      <View style={{alignItems: 'center', width: deviceWidth / 4}}>
        <Image source={uri}
               resizeMode={Image.resizeMode.contain}
               style={{tintColor: this.props.selected ? '#4697f2' : '#333', width: 15, height: 15}}/>
        <Text
          style={{
            color: this.props.selected ? '#4697f2' : '#333',
            fontSize: 12,
            marginTop: 2
          }}>{this.props.title}</Text>
      </View>
    );
  }
}

export default class RouterConfig extends Component {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    return (
        <Router hideNavBar={true} sceneStyle={{backgroundColor: '#F7F7F7'}}>
          <Scene key="root" hideNavBar={true}>
            <Scene
              key="tabBar"
              tabs
              initial={true}
              default="home"
              tabBarStyle={styles.tabBarStyle}
              tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
            >
              <Scene key="home_scene" schema="tab" title={TAB_TITLE_HOME}
                     hideNavBar={true}
                     icon={TabIcon}>
                <Scene key="home" duration={1} hideTabBar={false} component={Home} type={ActionConst.RESET}/>
                <Scene key="journeyHome" duration={1} hideTabBar={true} component={JourneyHome} type={ActionConst.PUSH}/>
                <Scene key="hotelList" duration={1} hideTabBar={true} component={HotelList} type={ActionConst.PUSH}/>
                <Scene key="roomList" duration={1} hideTabBar={true} component={RoomList} type={ActionConst.PUSH}/>
                <Scene key="scenicRegion" duration={1} hideTabBar={true} component={ScenicRegion} type={ActionConst.PUSH}/>
                <Scene key="scenicOrderDetail" duration={1} hideTabBar={true} component={ScenicOrderDetail} type={ActionConst.PUSH}/>
                <Scene key="travlPark" duration={1} hideTabBar={true} component={TravlPark} type={ActionConst.PUSH}/>
                <Scene key="inPark" duration={1} hideTabBar={true} component={InPark} type={ActionConst.PUSH}/>
                <Scene key="travlParkDetail" duration={1} hideTabBar={true} component={TravlParkDetail} type={ActionConst.PUSH}/>
                <Scene key="hotelSearch" duration={1} hideTabBar={true} component={HotelSearch} type={ActionConst.PUSH}/>
                <Scene key="scenicProductDetail" duration={1} hideTabBar={true} component={ScenicProductDetail} type={ActionConst.PUSH}/>
                <Scene key="scenicList" duration={1} hideTabBar={true} component={ScenicList} type={ActionConst.PUSH}/>
                <Scene key="scenicProduct" duration={1} hideTabBar={true} component={ScenicProduct} type={ActionConst.PUSH}/>

                <Scene key="roomDetail" duration={1} hideTabBar={true} component={RoomDetail} type={ActionConst.PUSH}/>
                <Scene key="productsList" duration={1} hideTabBar={true} component={ProductsList} type={ActionConst.PUSH}/>
                <Scene key="productsDetail" duration={1} hideTabBar={true} component={ProductsDetail} type={ActionConst.PUSH}/>
                <Scene key="personalInformation" duration={1} hideTabBar={true} component={PersonalInformation} type={ActionConst.PUSH}/>
                <Scene key="bookSuccess" duration={1} hideTabBar={true} component={BookSuccess} type={ActionConst.PUSH}/>
                <Scene key="orderDetail" duration={1} hideTabBar={true} component={OrderDetail} type={ActionConst.PUSH}/>
              </Scene>
              <Scene key="order_scene" schema="tab" title={TAB_TITLE_ORDER}
                     hideNavBar={true}
                     icon={TabIcon} >
                <Scene key="order" duration={1} hideTabBar={false} component={Order} type={ActionConst.RESET}/>
                <Scene key="journeyOrder" duration={1} hideTabBar={true} component={JourneyOrder} type={ActionConst.PUSH}/>
                <Scene key="orderedList" duration={1} hideTabBar={true} component={OrderedList} type={ActionConst.PUSH}/>
                <Scene key="checkoutRoom" duration={1} hideTabBar={true} component={CheckoutRoom} type={ActionConst.PUSH}/>

              </Scene>
              <Scene key="account_scene" schema="tab" title={TAB_TITLE_ACCOUNT} hideNavBar={true}
                     icon={TabIcon} >
                <Scene key="account" component={Account} hideNavBar type={ActionConst.RESET}/>
              </Scene>
              <Scene key="setting_scene" schema="tab" title={TAB_TITLE_SETTING}
                     hideNavBar={true}
                     icon={TabIcon} >
                <Scene key="setting" component={Setting} hideNavBar type={ActionConst.RESET}/>
              </Scene>
            </Scene>
          </Scene>
        </Router>
    );
  }
}

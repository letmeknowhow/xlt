/**
 *  Class: productsList
 *  Author: He Jiaoyan
 *  Date: 16/12/6.
 *  Description:产品列表
 */
import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import CommonHeader  from '../../component/CommonHeader';
import {Actions} from 'react-native-router-flux';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const LIST_PEODUCTS=[
  {id: '1',price:'¥1998', starting:'北京出发',time:'2016.12.15、2017.1.1',
    title:'10月阳光牧场-张家口精品六日游',
    details:'杭州直飞张家口6天往返机票 张家口坝上 自由行',
    picUrl: require('../../../assets/journey/pro1.png')},
  {id: '2',price:'¥1998', starting:'北京出发',time:'2016.12.15、2017.1.1',
    title:'10月阳光牧场-张家口精品六日游',
    details:'杭州直飞张家口6天往返机票 张家口坝上 自由行',
    picUrl: require('../../../assets/journey/pro2.png')},
  {id: '3',price:'¥1998', starting:'北京出发',time:'2016.12.15、2017.1.1',
    title:'10月阳光牧场-张家口精品六日游',
    details:'杭州直飞张家口6天往返机票 张家口坝上 自由行',
    picUrl: require('../../../assets/journey/pro3.png')},
  {id: '4',price:'¥1998', starting:'北京出发',time:'2016.12.15、2017.1.1',
    title:'10月阳光牧场-张家口精品六日游',
    details:'杭州直飞张家口6天往返机票 张家口坝上 自由行',
    picUrl: require('../../../assets/journey/pro4.png')},
  {id: '5',price:'¥1998', starting:'北京出发',time:'2016.12.15、2017.1.1',
    title:'10月阳光牧场-张家口精品六日游',
    details:'杭州直飞张家口6天往返机票 张家口坝上 自由行',
    picUrl: require('../../../assets/journey/pro1.png')},
];

const styles=StyleSheet.create({


});

export default class productsList extends Component {
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
    let proList=LIST_PEODUCTS.map((item,index)=>{
      return (
        <TouchableOpacity key={index} onPress={this.getAction} style={{marginBottom: 5}}>
          <Image source={item.picUrl} style={{width:deviceWidth,height:200}}>
            <View style={{width:deviceWidth,height:80,backgroundColor:'rgba(0,0,0,0.4)',
            paddingHorizontal:10,paddingVertical:10,marginTop:120}}>
              <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'normal',fontSize:14,color:'#fff'}}>{item.starting}</Text>
                <Text style={{fontWeight:'normal',fontSize:14,color:'#fff',marginLeft:10}}>最近时间: {item.time}</Text>
              </View>
              <View style={{flexDirection:'row',marginTop:5}}>
                <Text style={{fontWeight:'normal',fontSize:16,color:'red',marginRight:20,marginTop:10}}>{item.price}</Text>
                <Text style={{width:1,height:30,backgroundColor:'#fff',marginRight:5,marginTop:3}}/>
                <View>
                  <Text style={{fontWeight:'normal',fontSize:14,color:'#fff'}}>{item.title}</Text>
                  <Text style={{fontWeight:'normal',fontSize:12,color:'#fff',marginTop:5}}>{item.details}</Text>
                </View>
              </View>

            </View>
          </Image>
        </TouchableOpacity>

      )
    });
    return (
      <View style={{flex: 1, backgroundColor: '#e8e8e8'}}>
        <CommonHeader title="产品列表"/>
        <ScrollView style={{flex: 1}}>
          {proList}
        </ScrollView>
      </View>
    );
  }
  getAction(id){
    switch (id){
      case 0:
        Actions.productsDetail({data:'产品详情'});
        break;
      default:
        Actions.productsDetail({data:'产品详情'});
    }
  }
}
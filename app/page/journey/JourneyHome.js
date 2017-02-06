/**
 *  Class: container
 *  Author: Niu Xiaoyu
 *  Date: 16/5/11.
 *  Description:
 */
import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';

import { View, Text, StyleSheet, Platform, Image, Button, Dimensions ,ScrollView, TouchableOpacity} from 'react-native';
import SearchHeader from '../../component/SearchHeader';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const LIST_IMG=[
  {id: '1',address:'香港', picUrl: require('../../../assets/journey/list1.png')},
  {id: '2',address:'美国', picUrl: require('../../../assets/journey/list2.png')},
  {id: '3',address:'日本', picUrl: require('../../../assets/journey/list3.png')},
  {id: '4',address:'悉尼', picUrl: require('../../../assets/journey/list4.png')},
  {id: '5',address:'北京', picUrl: require('../../../assets/journey/list5.png')},
  {id: '6',address:'巴黎', picUrl: require('../../../assets/journey/list6.png')},
  {id: '7',address:'印度', picUrl: require('../../../assets/journey/list7.png')}
];
const styles = StyleSheet.create(
  {
    page: {
      flex: 1,
      backgroundColor: '#fff'
    },
    line:{
      width:60,
      height:1,
      backgroundColor:'red',
      marginTop:10
    }
  }
);
//const startLists=['北京','上海','广州','深圳','湖南'];

export default class JourneyHome extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }
  render() {
    console.log(this.props.data);
    let imgItem=LIST_IMG.map((item,index)=>{
      return (
        <TouchableOpacity key={index}  onPress={this.getAction}>
          <Image style={{width: deviceWidth , height: 200,flex:1,justifyContent:'center'}} source={item.picUrl}>
            <Text style={{width:deviceWidth,height:50,backgroundColor: 'rgba(0,0,0,0.4)',
            textAlign:'center',fontSize:24,fontWeight:'bold',color:'#fff',paddingTop: Platform.OS === 'ios' ? 12 : 10}}>
              {item.address}
            </Text>
          </Image>
          <View style={{width:deviceWidth,height:10}}/>
        </TouchableOpacity>
      )
    });
    return (
      <View style={styles.page}>
        <SearchHeader placeholder="目的地"/>
        <View style={{marginHorizontal:50,marginTop:10,marginBottom:10,flexDirection:'row',justifyContent:'center'}}>
          <View style={styles.line}/>
          <Text style={{fontSize:20,color:'red',fontWeight:'normal'}}>热点推荐</Text>
          <View style={styles.line}/>
        </View>
        <ScrollView>
          {imgItem}
        </ScrollView>
      </View>
    );
  }
  getAction(id){
    switch (id){
      case 0:
        Actions.productsList({data:'产品列表'});
        break;
      default:
        Actions.productsList({data:'产品列表'});
    }
  }
}

/**
 * Created by GuoQianqian on 16/12/6.
 * Description: 游园
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

import CommonHeader from '../../component/CommonHeader';
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
    padding: 10,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  }
});
const data = [
  {parkId:'1、', parkName: '当前位置（犀牛馆）', distance: ''},
  {parkId:'2、', parkName: '海洋馆', distance: '200m '},
  {parkId:'3、', parkName: '鸵鸟馆', distance: '400m '},
  {parkId:'4、', parkName: '孔雀馆', distance: '450m '},
  {parkId:'5、', parkName: '北极熊馆', distance: '500m '},
  {parkId:'6、', parkName: '野猪馆', distance: '700m '},
  {parkId:'7、', parkName: '羊驼场', distance: '880m '}
];

export default class TravlPark extends Component {
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
    let parkItem = data.map((item, index) => {
      return (
        <TouchableOpacity key={index} style={styles.flexAll} onPress={Actions.travlParkDetail}>
          <View style={{flex:1, flexDirection: 'row'}}>
            <View >
              <Text style={{color: '#333'}}>{item.parkId}</Text>
            </View>
            <View >
              <Text style={{color: '#333'}}>{item.parkName}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row',justifyContent: 'center',
            alignItems: 'center'}}>
            <Text style={{color: '#333'}}>{item.distance}</Text>
            <Image style={{width: 9, height: 16, marginLeft: 10}} source={require('../../../assets/home/2X/right_btn.png')}/>
          </View>
        </TouchableOpacity>
      );
    });
    return (
      <View style={styles.container}>
        <CommonHeader title="北京动物园地图"/>
        <ScrollView>
        <Image style={{height: 300,width:deviceWidth}} resizeMode="cover" source={require('../../../assets/travlPark/travlPark.jpg')}/>
        </ScrollView>
        <ScrollView>{parkItem}</ScrollView>
      </View>
    );
  }
}
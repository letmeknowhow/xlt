/**
 * Created by GuoQianqian on 16/12/6.
 * Description: 游园详情
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
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  flexL: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: 10
  },
  flexR: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: 5,
    paddingTop: 5
  },
});
const data = [
  {hotelName: '便民观光游轮站台', price: '120元／成人;30元／儿童', hotelDistance: '20m', img: require('../../../assets/hotelImg/1.jpg')},
  {hotelName: '便民观光游轮站台', price: '120元／成人;30元／儿童', hotelDistance: '20m', img: require('../../../assets/hotelImg/2.jpg')},
  {hotelName: '便民观光游轮站台', price: '120元／成人;30元／儿童', hotelDistance: '20m', img: require('../../../assets/hotelImg/3.jpg')}
];

export default class TravlParkDetail extends Component {
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
          <View style={styles.flexL}>
            <Image style={{width: deviceWidth * 0.15, height: 55}} source={item.img}/>
          </View>
          <View style={[styles.flexR, {position: 'relative'}]}>
            <Text style={{color: '#333'}} numberOfLines={1}>{item.hotelName}</Text>
            <View style={{flex:5,flexDirection:'row', justifyContent: 'space-between', alignItems:'center'}}>
              <View style={{flex:1}}><Text style={{fontSize: 12,color:'#333'}}>{item.price}</Text></View>
              <View><Text style={{color: '#333'}}>{item.hotelDistance}</Text></View>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
    return (
      <View style={styles.container}>
        <CommonHeader title="北极熊馆"/>
      <ScrollView>
        <Image style={{height: 250,width:deviceWidth}} resizeMode="cover" source={require('../../../assets/travlPark/xiong.jpg')}/>
        <View style={{marginTop:10, marginBottom: 10, padding: 10, backgroundColor: '#fff'}}>
          <Text style={{color: '#333',fontSize:13}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;北极熊（拉丁学名：Ursus maritimus），是世界上最大的陆地食肉动物，又名白熊，憨态可掬。皮肤为黑色，由于毛发透明故外观上通常为白色，也有黄色等颜色，体型巨大，凶猛。
北极熊的视力和听力与人类相当，但它们的嗅觉极为灵敏，是犬类的7倍,由于全球气温的升高，北极的浮冰逐渐开始融化，北极熊昔日的家园已遭到一定程度的破坏，在未来的不久很可能灭绝，需要人类的保护。
          </Text>

        </View>
        <View style={{height:40, padding: 10, flexDirection: 'row', alignItems:'center', justifyContent: 'space-between', marginBottom: 10, backgroundColor: '#fff'}}>
          <Text style={{color: '#333'}}>现在排队等待入园的人数</Text>
          <View style={{flex:1, flexDirection: 'row', alignItems:'center',justifyContent: 'flex-end',}}>
            <Text style={{color: 'red'}}>120</Text>
            <Text style={{color: '#333'}}>人</Text>
          </View>
        </View>
        <View >
          <Text style={{padding:10,paddingBottom: 0, color: '#333', backgroundColor: '#fff'}}>附近便民服务</Text>
          {parkItem}
        </View>
        </ScrollView>
      </View>
    );
  }
}
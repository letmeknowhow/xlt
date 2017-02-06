/**
 * Created by GuoQianqian on 16/12/6.
 * Description: 入园
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
  listTitleView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      padding: 10,
      backgroundColor: '#fff',
      height: 45,
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderBottomColor: '#ccc',
      borderTopColor: '#ccc'
    },
    listSecondView: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#fff',
      height: 45,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    listThirdView: {
      flexDirection: 'row',
      padding: 10,
      backgroundColor: '#fff',
      height: 110,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    listFourView: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#fff',
      height: 300
    },
    listFiveView: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      height: 45
    },
});
const data = [
  {parkId:'1、', parkName: '当前位置（犀牛馆）', distance: ''},
  {parkId:'2、', parkName: '海洋馆', distance: '200m >'},
  {parkId:'3、', parkName: '鸵鸟馆', distance: '400m >'},
  {parkId:'4、', parkName: '孔雀馆', distance: '450m >'},
  {parkId:'5、', parkName: '北极熊馆', distance: '500m >'},
  {parkId:'6、', parkName: '野猪馆', distance: '700m >'},
  {parkId:'7、', parkName: '羊驼场', distance: '880m >'}
];

export default class InPark extends Component {
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
          <View >
            <Text style={{color: '#333'}}>{item.distance}</Text>
          </View>
        </TouchableOpacity>
      );
    });
    return (
      <View style={styles.container}>
        <CommonHeader title="订单详情"/>
        <View style={styles.flexAll} onPress={Actions.travlParkDetail}>
          <View style={styles.flexL}>
            <Image style={{width: deviceWidth * 0.25, height: 90}} source={require('../../../assets/travlPark/travlPark.jpg')}/>
          </View>
          <View style={{flex:1,flexDirection:'column', justifyContent: 'space-between', paddingTop: 10, paddingBottom: 10}}>
            <Text style={{color: '#1d1d1d', fontSize: 16, fontWeight: 'bold'}} numberOfLines={1}>北京动物园成人票</Text>
            {/*<Text style={{color: '#888', fontSize: 20, marginLeft: deviceWidth-150}}>></Text>*/}
            <Text style={{fontSize: 16,color:'red', fontWeight: 'bold'}}>¥150</Text>  
          </View>
        </View>
        <View style={{flexDirection: 'row' , height: 45, backgroundColor: '#fff', justifyContent:'space-between', alignItems: 'center', borderBottomColor: '#ccc', borderBottomWidth: 1}}>
          <View><Text style={{width: deviceWidth / 3, textAlign: 'center',color: '#333'}}>再来一单</Text></View>
          <View><Text style={{width: deviceWidth / 3, textAlign: 'center', color:'#888'}}>不支持退款</Text></View>
          <View><Text style={{width: deviceWidth / 3, textAlign: 'center',color: '#333'}}>去点评</Text></View>
        </View>
        <View>
          <View style={styles.listTitleView}>
            <View style={{width: 5, height: 15, backgroundColor: '#3492ea', borderRadius: 3, marginRight: 5}}/>
            <Text>使用方式</Text>
          </View>
          <View style={styles.listSecondView}>
            <Text style={{flex:1,color: '#888'}}>有效日期</Text>
            <Text style={{flex:3,color: '#333'}}>2016-11-12当日</Text>
          </View>
          <View style={styles.listThirdView}>
            <Text style={{flex:1,color: '#888'}}>二维码</Text>
            <View style={{flex:3}}>
            <Image style={{width: deviceWidth * 0.25, height: 90}} source={require('../../../assets/travlPark/ermeima.jpg')}/>
            </View>
          </View>
          <View style={styles.listFourView}>
          <View style={{flexDirection: 'row',marginBottom: 10}}>
            <Text style={{flex:1, color: '#888'}}>景区地址</Text>
            <Text style={{flex:3,color: '#333'}}>北京市西城区西直门外大街137号</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex:1, lineHeight: 20, color: '#888'}}>使用方式</Text>
            <Text style={{flex:3, lineHeight: 20,color: '#333'}}>请凭手机短信及二代身份证在合适的时间到景点处取票或扫描二维码进入。</Text>
          </View>
          </View>
        </View>
      </View>
    );
  }
}
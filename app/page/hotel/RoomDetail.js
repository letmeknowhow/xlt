/**
 * Created by wangshuang on 16/12/6.
 * Description: 房间详情
 */
/**
 * Created by wangshuang on 16/12/5.
 * Description: 房间列表
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
const deviceWidth = Dimensions.get('window').width;
//style
import NativeTachyons, {styles as s} from 'react-native-style-tachyons';
NativeTachyons.build({
  /* REM parameter it optional, default is 16 */
  rem: deviceWidth > 340 ? 12 : 10
}, StyleSheet);
import GridView from '../../component/GridView';
import Button from '../../component/Button';
import {Actions} from 'react-native-router-flux';

const BACK_ICON = require('../../../assets/home/2X/back_icon.png');
const MOCKDATA_ICON1 = [
  {
    name: '早餐',
    dec: '双份'
  },
  {
    name: '宽带',
    dec: '免费无线'
  },
  {
    name: '面积',
    dec: '23平方米'
  },
  {
    name: '无烟',
    dec: '没无烟房'
  },
  {
    name: '可住',
    dec: '2人'
  },
  {
    name: '加床',
    dec: '双份4'
  },
  {
    name: '床型',
    dec: '大床(1.8m)'
  },
  {
    name: '楼层',
    dec: '6'
  },
];

// 样式定义
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8'
  },
  page: {
    backgroundColor: '#fff',
    padding: 10
  },
  gridView: {
    flex: 1,
    height: 130,
    backgroundColor: '#fff',
    marginBottom: 3,
    padding: 10,
  },
  button: {
    flex: 1,
    marginBottom: 0,
    height: 30,
    borderRadius: 0,
    marginRight: 6,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  flexAll: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',

  },
  flexL: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  flexR: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center'
  },
  textLeft: {
    textAlign: 'left'
  },
  white: {
    color: '#fff'
  },
  fontSize15: {
    fontSize: 15
  },
  back_button: {
    width: 44,
    height: 44,
    backgroundColor: '#999',
    opacity: 0.4,
    borderWidth: 0
  },
  resizeMode: {
    width: 30,
    height: 30,
    marginTop: Platform.OS === 'ios' ? 0 : 0
  }
});

export default class RoomDetail extends Component {
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
        <ScrollView>
          <View style={{position: 'relative'}}>
            <Image
              style={{width: deviceWidth, height: 260}}
              source={require('../../../assets/hotelImg/roomDetail.jpeg')}
            />
            <View style={{opacity: 0.7, position: 'absolute', top: 20, left: 10, zIndex: 1, borderRadius: 0}}>
              <Button style={[styles.back_button, {borderRadius: 22}]} onPress={Actions.pop} >
                <Image
                  style={[styles.resizeMode]}
                  resizeMode={Image.resizeMode.contain}
                  source={BACK_ICON}/>
              </Button>
            </View>

          </View>
          <View style={styles.page}>
            <Text style={{fontSize: 14, color: '#333', fontWeight: 'bold'}}>豪华大床房[标准价]</Text>
            <GridView style={styles.gridView}
                      items={MOCKDATA_ICON1}
                      itemsPerRow={2}
                      scrollEnabled={false}
                      rowHeight={30}
                      renderItem={this.renderItem.bind(this)}
            />
          </View>
          <TouchableOpacity style={[styles.page, {borderColor: '#eee', borderTopWidth: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'}]}>
            <Text style={{fontSize: 12, color: '#1296ac'}}>
              查看更多设施
            </Text>
            <Image style={{width: 16, height: 9, tintColor: '#1296ac', marginLeft: 10}} source={require('../../../assets/home/2X/down_arrow_btn.png')}/>
          </TouchableOpacity>
          <View style={[styles.flexAll, {marginTop: 10, backgroundColor: '#fff', paddingVertical: 10, paddingRight: 20}]}>
            <View style={[styles.flexL]}>
              <View style={{width: 46, borderColor: '#ff9b01', borderWidth: 1, flexDirection: 'column',
                justifyContent: 'flex-start',
              }}>
                <Text style={{color: '#ff9b01', fontSize: 10}}>不可取消</Text>
              </View>
            </View>
            <View style={[styles.flexR]}>
              <Text style={{fontSize: 13}}>预订该政策,需要您预先支付房费¥330,订单确认后不可取消或修改,如未入住房费不予退还。</Text>
            </View>
          </View>
        </ScrollView>
        <View style={{height: 50, flexDirection: 'row', backgroundColor: '#fff', borderColor: '#eee', borderTopWidth: 1, paddingLeft: 20}}>
          <View style={{flex: 2, alignItems: 'flex-start', justifyContent: 'center'}}>
            <Text style={{fontSize: 10, color: '#999'}}>在线支付 <Text style={{fontSize: 15, color: '#ff5345'}}><Text style={{fontSize: 9}}>¥</Text>330</Text> </Text>
          </View>
          <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ff5345'}} onPress={Actions.personalInformation}>
            <Text style={{color: '#fff'}}>立即预订</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }

  renderItem(item) {
    return (
      <View key={item.name} style={[styles.button]}>
        <Text style={{fontSize: 12}}>
          {item.name}: <Text style={{color: '#333'}}> {item.dec}</Text>
        </Text>
      </View>
    );
  }
}
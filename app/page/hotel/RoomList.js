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
    name: '无锡2日游自选无锡新湖铂尔曼大酒店,灵山大佛、灵山大佛灵山大佛',
    price: '¥439起/份',
    address: '无锡',
    comment: '1040条评论 98%满意',
    icon: require('../../../assets/hotelImg/1.jpg')
  },
  {
    name: '杭州2日游自选宋城千古情主题酒店(杭州西湖店),杭州灵山大佛灵山大佛',
    price: '¥447起/份',
    address: '杭州',
    comment: '708条评论 98%满意',
    icon: require('../../../assets/hotelImg/2.jpg')
  },
  {
    name: '无锡2日游自选无锡新湖铂尔曼大酒店,灵山大佛、灵山大佛灵山大佛',
    price: '¥439起/份',
    address: '无锡',
    comment: '777条评论 98%满意',
    icon: require('../../../assets/hotelImg/3.jpg')
  },
  {
    name: '杭州2日游自选宋城千古情主题酒店(杭州西湖店),杭州灵山大佛灵山大佛灵山大佛',
    price: '¥447起/份',
    address: '杭州',
    comment: '777条评论 98%满意',
    icon: require('../../../assets/hotelImg/4.jpg')
  }
];
const BED_DATA = [
  {
    img: require('../../../assets/hotelImg/room1.jpg'),
    num: '4张',
    bed: '高级特大床房',
    dec: '16-22m 大床1.8m 有wifi',
    price: '550'
  },
  {
    img: require('../../../assets/hotelImg/room2.jpg'),
    num: '3张',
    bed: '双床房',
    dec: '22m 双床1.2m 有wifi',
    price: '559'
  }
];

// 样式定义
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8'
  },
  gridView: {
    flex: 1,
    height: 350,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    backgroundColor: '#fff',
    marginBottom: 3,
    padding: 10,
    paddingRight: 4
  },
  button: {
    flex: 1,
    marginBottom: 0,
    borderWidth: 1,
    height: 160,
    borderRadius: 0,
    borderColor: '#ccc',
    marginRight: 6,
    paddingBottom: 5
  },
  flexAll: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',

  },
  flexL: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  flexR: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 3
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

export default class RoomList extends Component {
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);

  }
  render() {
    let bedDataItem = BED_DATA.map((item, index) => {
      return (
        <TouchableOpacity key={index} style={[styles.flexAll, {height: 70, borderTopWidth: 1, borderColor: '#ccc'}]} onPress={Actions.roomDetail}>
          <View style={[styles.flexL, {flex: 1, paddingLeft: 10, position: 'relative'}]}>
            <Image
              style={{width: 50, height: 50}}
              source={item.img}
            />
            <View style={{position: 'absolute', bottom: 13, right: Platform.OS === 'ios' ? 15 : 25, backgroundColor: '#333'}}>
              <Text style={{color: '#fff', fontSize: 10}}>{item.num}</Text>

            </View>
          </View>
          <View style={[styles.flexR, {flex: 3, backgroundColor: 'transparent', alignItems: 'flex-start'}]}>
            <Text style={{paddingVertical: 5}}>{item.bed}</Text>
            <Text style={{fontSize: 12, color: '#aaa'}}>{item.dec}</Text>
          </View>

          <View style={[styles.flexR, {flex: 1, flexDirection: 'row' , backgroundColor: 'transparent', alignItems: 'center'}]}>
            <Text style={{color: '#ff9b01'}}>¥<Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.price}</Text></Text>
            <Image style={{width: 9, height: 16, marginLeft: 10}} source={require('../../../assets/home/2X/right_btn.png')}/>
          </View>
        </TouchableOpacity>
      );
    });
    return (
      <ScrollView style={styles.container}>
        <View style={{position: 'relative'}}>
          <Image
            style={{width: deviceWidth, height: 150}}
            source={require('../../../assets/hotelImg/hotel1.jpg')}
          />
          <View style={{opacity: 0.7, position: 'absolute', top: 20, left: 10, zIndex: 1, borderRadius: 0}}>
            <Button style={[styles.back_button, {borderRadius: 22}]} onPress={Actions.pop} >
              <Image
                style={[styles.resizeMode]}
                resizeMode={Image.resizeMode.contain}
                source={BACK_ICON}/>
            </Button>
          </View>
          <View style={{position: 'absolute', bottom: 5, left: 0, width: deviceWidth, backgroundColor: 'transparent', paddingLeft: 5}}>
            <Text style={styles.white}>2006年装修</Text>
            <View style={styles.flexAll}>
              <Text style={[styles.flexL, styles.white, styles.fontSize15]}>北京港中旅维景国际大酒店[四星级]</Text>
            </View>
          </View>
        </View>
        <View style={[styles.flexAll, {paddingLeft: 15, height: 100, borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 5, backgroundColor: '#fff'}]}>
          <View style={[styles.flexL, {flex: 1}]}>
            <Text style={[styles.textLeft, {color: '#ff9b01'}]}>4.5分</Text>
            <Text style={[styles.textLeft, {color: '#ff9b01', paddingTop: 3, paddingBottom: 5}]}>非常棒</Text>
            <Text style={[styles.textLeft, {fontSize: 10}]}>94%评论</Text>
            <Text style={[styles.textLeft, {fontSize: 10}]}>439条评论></Text>
          </View>
          <View style={[styles.flexR, {flex: 3, backgroundColor: '#fff', position: 'relative'}]}>
            <Image
              style={{width: deviceWidth * 3 / 4, height: 100}}
              source={require('../../../assets/hotelImg/addressImg.png')}
            />
            <View style={{position: 'absolute', top: 0, left: -5, width: deviceWidth * 3 / 4, backgroundColor: '#fff', opacity: 0.8}}>
              <Text style={[styles.flexL, {fontSize: 10, paddingHorizontal: 5}]} numberOfLines={2}>东城区朝阳门内大街130号,朝阳门|王府井|东直门,距您2.6公里</Text>
            </View>
          </View>
        </View>
        <View style={{borderTopWidth: 1, borderColor: '#ccc', backgroundColor: '#fff'}}>
          <View style={[styles.flexAll, {paddingHorizontal: 10, paddingVertical: 10, height: 40}]}>
            <Text style={[{flex: 1.5, alignItems: 'center', fontSize: 10, color: '#999'}]}>
              入住 <Text style={{fontSize: 13, color: '#1d1d1d'}}>11月30日</Text><Text> 今天</Text>
            </Text>
            <View style={[{flex: 2.5,
              flexDirection: 'row',
              justifyContent: 'space-between', backgroundColor: 'transparent', borderLeftWidth: 1, borderColor: '#ccc', borderRadius: 0, paddingLeft: 10}]}>
              <Text style={{fontSize: 10, color: '#999'}}>
                离店 <Text style={{fontSize: 13, color: '#1d1d1d'}}>12月1日</Text><Text> 明天</Text>
              </Text>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text>共1晚</Text>
              </View>

            </View>
          </View>
          {bedDataItem}
          <TouchableOpacity style={[styles.flexAll, {height: 90, borderTopWidth: 1, borderColor: '#ccc'}]}>
            <View style={[{flex: 1}]}>
              <Text style={{padding: 10, fontWeight: 'bold'}}>酒店政策</Text>
              <Text style={{fontSize: 12, padding: 10}} numberOfLines={2}>入住时间: 8:00以后  离店时间: 12:00以前 不同类型的客房附带不同的取消预订和预先付费政策</Text>
            </View>
            {/*<View style={[{flex: 1, justifyContent: 'center',*/}
              {/*alignItems: 'center'}]}>*/}
              {/*<Image style={{width: 9, height: 16, marginLeft: 10}} source={require('../../../assets/home/2X/right_btn.png')}/>*/}
            {/*</View>*/}
          </TouchableOpacity>
        </View>
        <View>
          <Text style={[styles.textCenter, {paddingVertical: 5}]}>周边推荐</Text>
        </View>
        <GridView style={styles.gridView}
                  items={MOCKDATA_ICON1}
                  itemsPerRow={2}
                  scrollEnabled={false}
                  rowHeight={166}
                  renderItem={this.renderItem.bind(this)}
        />
      </ScrollView>
    );
  }
  renderItem(item) {
    return (
      <Button key={item.name} style={[styles.button]} onPress={() => {

      } }>
        <View style={{position: 'relative', backgroundColor: 'transparent'}}>
          <Image style={{height: 108, width: (deviceWidth - 30) / 2}} source={item.icon}/>
          <Text style={{marginTop: 5, fontSize: 10, color: '#fff', paddingHorizontal: 3, position: 'absolute', bottom: 5, left: 0}} numberOfLines={2}>
            {item.comment}
          </Text>
        </View>
        <View>
          <Text style={{marginTop: 5, fontSize: 10, color: '#1d1d1d', paddingHorizontal: 3}} numberOfLines={2}>
            {item.name}
          </Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={{flex: 1, marginTop: 5, fontSize: 10, color: '#ff9b01', paddingHorizontal: 5}}>
              {item.price}
            </Text>
            <Text style={{flex: 1, marginTop: 5, fontSize: 10, color: '#1d1d1d', paddingHorizontal: 5, textAlign: 'right'}}>
              {item.address}
            </Text>
          </View>

        </View>
      </Button>
    );
  }

}
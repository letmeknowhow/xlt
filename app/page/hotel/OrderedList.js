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
    flex: 1,
    flexDirection: 'row',
    height: 140,
    justifyContent: 'center',
    padding: 0,
    borderWidth: 0,
    borderColor: 'transparent',
    borderRadius: 0,
    marginBottom: 10,
  },
  flexL: {
    flex: 1.5,
    justifyContent: 'center',
    marginTop: 0,
    height: 130,
  },
  flexR: {
    flex: 3.5,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 5,
    height: 130
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  comment: {
    fontSize: 12,
    color: '#999',
  },
  score: {
    color: '#13b3ff',
  },
  lineHeight: {
    paddingTop: Platform.OS === 'ios' ? 3 : 2,
    paddingBottom: Platform.OS === 'ios' ? 3 : 2,
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
  },
];

export default class HotelList extends Component {
  // 默认属性

  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    };

  }
  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data),
      loaded: true,
    });
    console.log(this.state.dataSource);
  }

  renderRows(item, index) {

    return (
      <TouchableOpacity key={index} style={styles.flexAll} onPress={Actions.checkoutRoom}>
        <View style={styles.flexL}>
          <Image style={{width: deviceWidth * 0.29, height: 130, margin: 0,}} source={item.img}/>
        </View>
        <View style={styles.flexR}>
          <Text style={[styles.title, styles.lineHeight, {paddingRight: 10}]}
                numberOfLines={1}>{item.hotelName}</Text>
          <Text style={[styles.comment, styles.lineHeight]}>
            <Text style={[styles.title, styles.score]}>类型:</Text>
            <Text style={[styles.title, styles.score]}>{item.hotelType}</Text>
          </Text>
          <Text style={[styles.lineHeight, {fontSize: 12, color: '#999'}]}>入住时间:{item.comeDate}</Text>
          <Text style={[styles.lineHeight, {fontSize: 12, color: '#ff9b01'}]}>地址:{item.address}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  // 渲染
  render() {
    return (
      <View style={styles.container}>
        <CommonHeader title={this.props.data}/>
        <ListView dataSource={this.state.dataSource}
                  renderRow={this.renderRows.bind(this)} />
      </View>
    );
  }
}
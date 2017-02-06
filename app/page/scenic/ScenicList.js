/**
 * Class: ScenicList
 * Author: yangli
 * Date: 16/12/6
 * Description: 景区列表
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
  ListView
} from 'react-native';
import Button from '../../component/Button';

import CommonHeader from '../../component/CommonHeader';
const deviceWidth = Dimensions.get('window').width;
//style
import NativeTachyons, {styles as s} from 'react-native-style-tachyons';
NativeTachyons.build({
  /* REM parameter it optional, default is 16 */
  rem: deviceWidth > 340 ? 12 : 10
}, StyleSheet);
import {Actions} from 'react-native-router-flux';


// 样式定义
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8'
  },
  flexAll: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
  },
  flexL: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  flexR: {
    flex: 3.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10
  },
  flexNext: {
    flex: 0,
    alignSelf: 'flex-start',
    marginLeft: 10,
    fontFamily: 'Cochin',
    fontWeight: 'bold'
  },
  ratioColor: {
    color: '#ff2525',
    fontSize: deviceWidth >= 340 ? 20 : 16
  },
  contentFonts: {
    fontSize: 12,
    color: '#ccc'
  },
  logo: {
    position: 'absolute',
    width: 50,
    height: 50,
    top: 10,
    left: 10
  },
  nameFonts: {
    fontSize: 15,
    color: '#fff',
    paddingBottom: 5
  },
  partingLine: {
    flex: 0,
    width: 1,
    height: 30,
    backgroundColor: '#eee',
    flexDirection: 'column',
    alignSelf: 'center'
  },
  pictureThemeView: {
    width: deviceWidth,
    height: 50,
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    left: 0,
    marginTop: 70,
    flexDirection: 'column',
    alignItems: 'center',
  },
  pictureThemeText: {
    fontSize: 24,
    color: '#fff',
    marginTop: Platform.OS === 'ios' ? 13 : 8,
    fontWeight: 'bold'
  },
  priceFont: {
    fontSize: 15,
    color: '#ff2525'
  },

  page: {
    flex: 1,
    backgroundColor: '#fff'
  },
  back_button: {
    width: 30,
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  resizeMode: {
    width: 30,
    height: 30,
    borderWidth: 0
  },
  testColor: {
    flex: 1,
    textAlign: 'center',
    marginRight: 30,
    marginTop: 4,
    color: '#fff'
  },

  SearchView: {
    //flex: 1,
    width: deviceWidth - 100,
    height: Platform.OS === 'ios' ? 30 : 30,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  SearchButton: {
    flex: deviceWidth > 340 ? 1 : 1.3,
    height: Platform.OS === 'ios' ? 30 : 30,
    paddingBottom: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
    marginBottom: 0
  },
  partingLines: {
    flex: 0,
    width: 1,
    height: Platform.OS === 'ios' ? 20 : 20,
    backgroundColor: '#eee',
    flexDirection: 'column',
    alignSelf: 'center'
  }
});

const MockUrl = 'http://www.baidu.com';
const MOCKDATA_Scenic = [
  {id: '1', picUrl: require('../../../assets/travlPark/scence.jpg'), url: MockUrl, name: '少林寺'},
  {id: '2', picUrl: require('../../../assets/travlPark/sencetwo.jpg'), url: MockUrl, name: '云台山'},
  {id: '3', picUrl: require('../../../assets/travlPark/travlPark.jpg'), url: MockUrl,name: '香港'},
  {id: '4', picUrl: require('../../../assets/travlPark/sencetwo.jpg'), url: MockUrl, name: '少林寺'}
];


export default class ScenicList extends Component {
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

  renderRows(item, index) {

    return (
      <Button key={index}
              style={{flex: 1, height: deviceWidth > '340' ? 200 : 180, padding: 0, borderWidth: 0, borderColor: 'transparent', borderRadius: 0}} onPress={Actions.scenicProduct}
      >
        <Image source={item.picUrl} style={{width: deviceWidth, height: deviceWidth > '340' ? 200 : 180}}>
          <View style={[styles.pictureThemeView]}>
            <Text style={[styles.pictureThemeText]}>{item.name}</Text>
          </View>
        </Image>
      </Button>
    );
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(MOCKDATA_Scenic),
      loaded: true,
    });
    console.log(this.state.dataSource);
  }

  // 渲染
  render() {
    return (
      <View style={styles.page}>
        <CommonHeader title="景区列表" />
        <View style={{flex: 1}}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRows.bind(this)}
          />
        </View>
      </View>
    )
  }
}
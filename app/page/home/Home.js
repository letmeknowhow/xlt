/**
 *  Class: Home
 *  Author: He jiaoyan
 *  Date: 16/11/21
 *  Description: 首页
 */
import Constants from '../../config/Constants';
const MockUrl = 'http://www.baidu.com';
const MOCKDATA_BANNER = [
  {id: '1', picUrl: require('../../../assets/banner/1.jpg'), url: MockUrl},
  {id: '2', picUrl: require('../../../assets/banner/2.jpg'), url: MockUrl},
  {id: '3', picUrl: require('../../../assets/banner/3.jpg'), url: MockUrl},
  {id: '4', picUrl: require('../../../assets/banner/4.jpg'), url: MockUrl}
];
import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  InteractionManager,
  Platform,
  UIManager,
  TouchableOpacity,
  Image,
  LayoutAnimation
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Button from '../../component/Button';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

import SceneHeader from '../../component/SceneHeader';
import Banner from '../../component/Banner';
const CustomLayoutAnimation = {
  duration: 800,
  create: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
  },
};
const styles = StyleSheet.create(
  {
    page: {
      flex: 1,
      backgroundColor: '#fff',
      marginBottom: 50
    },
    container: {
      flex: 1,
      flexDirection: 'row',

      margin: 10
    },
    row: {
      flexDirection: 'row'
    },
    column: {
      flexDirection: 'column'
    },
    text: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16
    },
    marginR: {
      marginRight: 15
    },
    marginB: {
      marginBottom: 10
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 3
    }
  }
);

export default class Home extends Component {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    this.state = {
      bannerSource: [],
      focusButton: -1
    };
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    this.getBanner = this.getBanner.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.buttons = [
      <EnterButton
        index={0}
        flexRate={8}
        color="#2cbf24"
        handleClick={this.handleClick}
        img={require('../../../assets/startOne/icon/insurance_icon_home@3x.png')}
        enterName="保险通"
      />,
      <EnterButton
        index={1}
        flexRate={5}
        color="#3aa1e0"
        handleClick={this.handleClick}
        img={require('../../../assets/startOne/icon/pay_icon_home@3x.png')}
        enterName="支付通"
      />,
      <EnterButton
        index={2}
        flexRate={14}
        color="#ef5a4a"
        handleClick={this.handleClick}
        img={require('../../../assets/startOne/icon/journey_icon_home@3x.png')}
        enterName="旅行通"
        direction="column"
      />,
      <EnterButton
        index={3}
        flexRate={5}
        color="#ff729f"
        handleClick={this.handleClick}
        img={require('../../../assets/startOne/icon/scenic_spot_icon_home@3x.png')}
        enterName="景区通"
      />,
      <EnterButton
        index={4}
        flexRate={8}
        color="#0e86ad"
        handleClick={this.handleClick}
        img={require('../../../assets/startOne/icon/hotel_icon_home@3x.png')}
        enterName="酒店通"
      />,
      <EnterButton
        index={5}
        flexRate={1}
        color="#0fa3b1"
        handleClick={this.handleClick}
        img={require('../../../assets/startOne/icon/consumption_icon_home.png')}
        enterName="消费通"
        direction="column"
      />,
      <EnterButton
        index={6}
        flexRate={1}
        color="#ffa630"
        handleClick={this.handleClick}
        img={require('../../../assets/startOne/icon/loan_icon_home.png')}
        enterName="小贷通"
        direction="column"
      />,
      <EnterButton
        index={7}
        flexRate={5}
        color="#ef767a"
        handleClick={this.handleClick}
        img={require('../../../assets/startOne/icon/integral_icon_home@3x.png')}
        enterName="积分通"
        direction="row"
      />
    ];
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.getBanner();
    });
  }

  handleClick(index) {
    LayoutAnimation.configureNext(
      CustomLayoutAnimation,
      this.getAction(index)
    );

    this.setState({
      focusButton: index
    });
    //this.getAction(index);

    setTimeout(() => {
      this.setState({focusButton: -1});
    }, 1500);
  }

  // 渲染
  render() {
    let displayItems = <View style={styles.container}>
      <View style={{flex:1}}>
        {this.buttons[2]}
        {this.buttons[1]}
        {this.buttons[0]}
      </View>
      <View style={{flex:1}}>
        {this.buttons[3]}
        {this.buttons[4]}
        <View style={[{flex:8,flexDirection:'row'}]}>
          {this.buttons[5]}
          {this.buttons[6]}
        </View>
        {this.buttons[7]}
      </View>
    </View>;
    if (this.state.focusButton >= 0 && this.state.focusButton <= 7) {
      displayItems = <View style={styles.container}>
        {this.buttons[this.state.focusButton]}
      </View>;
    }
    return (
      <View style={styles.page}>
        <SceneHeader/>
        <Banner
          style={{height: 175}}
          source={this.state.bannerSource}
          height={175}
          autolay={true}
          fn={Actions.productsDetail}
        />
        {displayItems}
      </View>
    );
  }

  /**
   * 请求轮播图
   */
  getBanner() {
    this.setState({
      bannerSource: MOCKDATA_BANNER
    });
  }

  getAction(id) {
    switch (id) {
      case 0:
        break;
      case 1:
        break;
      case 2:
        Actions.journeyHome({data: '旅行目的地'});
        break;
      case 3:
        Actions.scenicRegion();
        break;
      case 4:
        Actions.hotelSearch();
        break;
      case 5:
        break;
      default:
    }
  }
}

class EnterButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[
          styles.button,
          this.props.direction == 'column' ? styles.column : styles.row,
          {flex: this.props.flexRate,backgroundColor: this.props.color},
          this.props.style
        ]}
        onPress={() => {this.props.handleClick(this.props.index);}}
        visible={this.props.visible}
      >
        <Image style={this.props.direction == 'column' ? styles.marginB : styles.marginR}
               source={this.props.img}/>
        <Text style={styles.text}>{this.props.enterName}</Text>
      </TouchableOpacity>
    );
  }
}
/**
 *  Class: ProductsDetail
 *  Author: He Jiaoyan
 *  Date: 16/12/6.
 *  Description:
 */
import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {Actions} from 'react-native-router-flux';

// import CommonHeader from '../../component/CommonHeader';
import Button from '../../component/Button';
const deviceWidth = Dimensions.get('window').width;
const BACK_ICON = require('../../../assets/home/2X/back_icon.png');

const LIST_DETAIL=[
  {id: '1',price:'¥1998', starting:'北京出发',time:'2016.12.15、2017.1.1',
    title:'国家地理版-早安德黑兰-伊朗波斯文化9日精粹之旅德黑兰-伊朗波斯文化9日精粹之旅',
    details:'杭州直飞张家口6天往返机票 张家口坝上 自由行',
    picUrl: require('../../../assets/journey/detail1.png')}
];
const TUIJIAN=[
  { id: '1',
    title:'想去湛池的人还想去',
    nameOne:'石林',
    scoreOne: '4.4分',
    disOne:'6.2公里',
    picOneUrl: require('../../../assets/travlPark/tuijian.jpg'),
    nameTwo:'翠湖公园',
    scoreTwo: '4.3分',
    disTwo:'11公里',
    picTwoUrl: require('../../../assets/travlPark/tuijian.jpg'),
    nameThree:'云南民族村',
    scoreThree: '4.3分',
    disThree: '10公里',
    picThreeUrl: require('../../../assets/travlPark/tuijian.jpg')
  },
  { id: '2',
    title:'附近热门景点',
    nameOne:'湛池生态科技园',
    scoreOne: '4.7分',
    disOne:'5.4公里',
    picOneUrl: require('../../../assets/travlPark/tuijian.jpg'),
    nameTwo:'柳林沙滩',
    scoreTwo: '3.5分',
    disTwo:'5.6公里',
    picTwoUrl: require('../../../assets/travlPark/tuijian.jpg'),
    nameThree:'海东湿地公园',
    scoreThree: '4.3分',
    disThree: '5.6公里',
    picThreeUrl: require('../../../assets/travlPark/tuijian.jpg')
  },
  { id: '3',
    title:'附近热门美食',
    nameOne:'石锅鱼',
    scoreOne: '4.4分',
    disOne:'5.4公里',
    picOneUrl: require('../../../assets/travlPark/tuijian.jpg'),
    nameTwo:'有缘阁餐厅',
    scoreTwo: '4.3分',
    disTwo:'6.4公里',
    picTwoUrl: require('../../../assets/travlPark/tuijian.jpg'),
    nameThree:'杨门豌豆粉',
    scoreThree: '4.3分',
    disThree: '7.0公里',
    picThreeUrl: require('../../../assets/travlPark/tuijian.jpg')
  }
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8'
  },
  listSecondView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding:10,
    backgroundColor: '#fff',
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tab: {
    color: '#888',
    lineHeight: 20
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
  },
  button: {
    backgroundColor: '#3492ea',
    borderRadius: 5,
    alignSelf: 'center',
    padding: 5,
    top: 3,
    borderColor: '#3492ea',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 15,
  },
})
export default class ProductsDetail extends Component {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    //this.state = {};
  }

  // 渲染
  render() {
    let detailImg=LIST_DETAIL.map((item,index)=>{
      return (
        <View>
          <Image source={item.picUrl} style={{width:deviceWidth,height:200}}>
            <View style={{width:deviceWidth,height:40,backgroundColor:'rgba(0,0,0,0.4)',paddingLeft:10,
              flexDirection:'row',alignItems:'center',marginTop:150}}>
              <Text style={{color:'#fff'}}>{item.starting}</Text>
              <Text style={{color:'#fff',marginLeft:10}}>最近时间: {item.time}</Text>
            </View>
          </Image>
          <View style={{padding: 10}}>
            <Text style={{lineHeight: 22, fontSize: 16, color: '#333'}}>{item.title}</Text>
            <Text style={{lineHeight: 20, color:'#888'}}>{item.details}</Text>
            <View style={{flex: 1, flexDirection: 'row', marginTop:10,justifyContent: 'space-between'}}>
              <Text style={{lineHeight: 20, color: 'red', fontWeight:'bold',fontSize: 16,paddingBottom:5}}>{item.price}起</Text>
              {/*<TouchableOpacity style={{width: 80, height:30, backgroundColor: '#3492ea',borderRadius: 5}}><Text style={{lineHeight: 18, color: '#fff', textAlign: 'center', marginTop:5, fontWeight: 'bold'}}>日程选择></Text></TouchableOpacity>*/}
              <TouchableOpacity style={[styles.button]}>
                <View style={[{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}]}>
                  <Text style={styles.buttonText}>日程选择</Text>
                  <Image source={require('../../../assets/home/2X/right_btn.png')} style={{width: 9, height: 16, marginLeft: 5, tintColor:'#fff'}}/>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
    });
    let tuijian=TUIJIAN.map((item,index)=>{
      return (
        <View style={{backgroundColor:'#fff',marginBottom: 10,padding: 10, paddingTop: 0}}>
          <View style={{padding:10,}}><Text style={{ fontSize:14,color: '#333'}}>{item.title}</Text></View>
          <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
            <View >
              <Image  source={item.picOneUrl} style={{width:deviceWidth / 3.4,height:80}}>
                <View style={{borderRadius: 8,height:20,width:50,backgroundColor:'rgba(0,0,0,0.5)',position:'absolute',bottom:3,right:3}}>
                  <Text style={{color:'#fff',fontSize:12,lineHeight: 16, textAlign:'center'}}>{item.disOne}</Text>
                </View>
              </Image>
              <Text style={{paddingTop: 5}}>{item.nameOne}</Text>
              <Text style={{paddingTop: 5, fontSize: 12,color: 'orange'}}>{item.scoreOne}</Text>
            </View>
            <View >
              <Image source={item.picTwoUrl} style={{width:deviceWidth / 3.4,height:80}}>
                <View style={{borderRadius: 8,height:20,width:50,backgroundColor:'rgba(0,0,0,0.5)',position:'absolute',bottom:3,right:3}}>
                  <Text style={{color:'#fff',fontSize:12,lineHeight: 16, textAlign:'center'}}>{item.disTwo}</Text>
                </View>
              </Image>
              <Text style={{paddingTop: 5}}>{item.nameTwo}</Text>
              <Text style={{paddingTop: 5, fontSize: 12,color: 'orange'}}>{item.scoreTwo}</Text>
            </View>
            <View >
              <Image style={{borderRadius: 5, width:deviceWidth / 3.4,height:80}} source={item.picThreeUrl}>
                <View style={{borderRadius: 8,height:20,width:50,backgroundColor:'rgba(0,0,0,0.5)',position:'absolute',bottom:3,right:3}}>
                  <Text style={{color:'#fff',fontSize:12,lineHeight: 16, textAlign:'center'}}>{item.disThree}</Text>
                </View>
              </Image>
              <Text style={{paddingTop: 5}}>{item.nameThree}</Text>
              <Text style={{paddingTop: 5, fontSize: 12,color: 'orange'}}>{item.scoreThree}</Text>
            </View>
          </View>
        </View>
      )
    });
    return (
      <View style={{flex: 1, position: 'relative'}}>
        <View style={{opacity: 0.7, position: 'absolute', top: 20, left: 10, zIndex: 1, borderRadius: 0}}>
          <Button style={[styles.back_button, {borderRadius: 22}]} onPress={Actions.pop} >
            <Image
              style={[styles.resizeMode]}
              resizeMode={Image.resizeMode.contain}
              source={BACK_ICON}/>
          </Button>
        </View>
        <ScrollView style={{flex:1}}>
          <View style={{backgroundColor: '#fff',marginBottom: 10}}>{detailImg}</View>
          <View style={{marginTop:10}}>
            <View style={styles.listSecondView}>
              <Text style={{flex:1,color:'#333',fontSize: 16}}>游客点评</Text>
              <Text style={{flex:2,color: '#333',fontSize: 16}}>（<Text style={{color: 'orange'}}>95%</Text>满意度）</Text>
              <Text style={{flex:2, textAlign: 'right',color:'#888'}}>共5215个点评</Text>
              <Image style={{width: 9, height: 16, marginLeft: 5}} source={require('../../../assets/home/2X/right_btn.png')}/>
            </View>
            <View style={{flexDirection:'column', backgroundColor:'#fff',padding:10}}>
              <View style={{flexDirection:'row'}}>
                <Text style={{flex:1,color:'#888'}}>导游服务：95%</Text>
                <Text style={{flex:1,color:'#888'}}>行程安排：93%</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={{flex:1,color:'#888'}}>餐饮住宿：91%</Text>
                <Text style={{flex:1,color:'#888'}}>旅行交通：95%</Text>
              </View>
            </View>
            <View style={{marginTop:10,padding:10,backgroundColor:'#fff'}}>
              <View style={{flexDirection: 'row',justifyContent:'space-between',paddingBottom: 10,borderBottomWidth:1,borderBottomColor:'#ccc'}}>
                <Text style={{flex:1, textAlign:'center',color:'#3492ea'}}>产品特色</Text>
                <Text style={{flex:1, textAlign:'center'}} >参考行程</Text>
                <Text style={{flex:1, textAlign:'center'}}>费用说明</Text>
                <Text style={{flex:1, textAlign:'center'}}>预订须知</Text>
              </View>
              <View style={{padding:10}}>
                <Text style={styles.tab}>产品经理推荐理由：</Text>
                <Text style={styles.tab}>[品味印象]：《羌宴十三花》《生态耗牛汤锅宴》《风情街自助餐》</Text>
                <Text style={styles.tab}>[藏羌风情]：《走进藏家民访》《藏羌风情歌舞晚会》</Text>
                <Text style={styles.tab}>[璀璨尽享]：九寨沟.黄龙［保证游览6个小时］.中国古羌城.特色藏寨.德吉梅朵风情街</Text>
                <Text style={styles.tab}>[专享品质]：成都正规空调旅游大巴</Text>
                <Text style={styles.tab}>[晶莹剔透]：全程0个购物店</Text>
                <Text style={styles.tab}>[贴心服务]：首都机场专人送机服务</Text>
              </View>
            </View>
            <View style={{flex: 1,marginTop:10,}}>{tuijian}</View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
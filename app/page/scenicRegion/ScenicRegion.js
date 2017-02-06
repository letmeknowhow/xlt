/**
 * Created by GuoQianqian on 16/12/6.
 * Description: 景区通
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
import GridView from '../../component/GridView';

import Button from '../../component/Button';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

//style
import NativeTachyons, {styles as s} from 'react-native-style-tachyons';
NativeTachyons.build({
  /* REM parameter it optional, default is 16 */
  rem: deviceWidth > 340 ? 12 : 10
}, StyleSheet);
const MOCKDATA_ICON1 = [
  {
    name: '预定',
    icon: require('../../../assets/home/2X/foreign_icon.png')
  },
  {
    name: '入园',
    icon: require('../../../assets/home/2X/inland_icon.png')
  },
  {
    name: '游园',
    icon: require('../../../assets/home/2X/around_icon.png')
  },

];
// 样式定义
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8'
  },
  flexAll: {
    flex: 1,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    padding:10,
    flexDirection: 'row',
    height: 48,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  gridView: {
    flex: 1,
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    backgroundColor: '#fff',
    paddingTop: 20,
    marginBottom: 10
  },
  button: {
    flex: 1,
    marginBottom: 0,
    borderWidth: 0,
    height: 70,
    borderRadius: 0
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
    marginTop: Platform.OS === 'ios' ? 15 : 10,
    fontWeight: 'bold'
  },
});

export default class ScenicRegion extends Component {
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
    return (
      <View style={styles.container}>
        <CommonHeader title="景区通"/>
         <ScrollView>
           <GridView style={styles.gridView}
                     items={MOCKDATA_ICON1}
                     itemsPerRow={3}
                     scrollEnabled={false}
                     rowHeight={70}
                     renderItem={this.renderItem.bind(this)}
           />
           {/*<TouchableOpacity onPress={Actions.scenicProduct}>*/}
             {/*<Image style={{height: 180,width:deviceWidth}} resizeMode="stretch" source={require('../../../assets/travlPark/scenceone.jpg')}/>*/}
           {/*</TouchableOpacity>*/}
           {/*<TouchableOpacity onPress={Actions.scenicProduct}>*/}
             {/*<Image style={{height: 180,width:deviceWidth}} resizeMode="stretch" source={require('../../../assets/travlPark/sencetwo.jpg')}/>*/}
           {/*</TouchableOpacity>*/}
           <Button
                   style={{flex: 1, height: deviceWidth > '340' ? 200 : 180, padding: 0, borderWidth: 0, borderColor: 'transparent', borderRadius: 0}} onPress={Actions.scenicProduct}
           >
             <Image source={require('../../../assets/travlPark/scenceone.jpg')} style={{width: deviceWidth, height: deviceWidth > '340' ? 200 : 180}}>
               <View style={[styles.pictureThemeView]}>
                 <Text style={[styles.pictureThemeText]}>少林寺</Text>
               </View>
             </Image>
           </Button>
           <Button
             style={{flex: 1, height: deviceWidth > '340' ? 200 : 180, padding: 0, borderWidth: 0, borderColor: 'transparent', borderRadius: 0}} onPress={Actions.scenicProduct}
           >
             <Image source={require('../../../assets/travlPark/sencetwo.jpg')} style={{width: deviceWidth, height: deviceWidth > '340' ? 200 : 180}}>
               <View style={[styles.pictureThemeView]}>
                 <Text style={[styles.pictureThemeText]}>云台山</Text>
               </View>
             </Image>
           </Button>
           <Button
             style={{flex: 1, height: deviceWidth > '340' ? 200 : 180, padding: 0, borderWidth: 0, borderColor: 'transparent', borderRadius: 0}} onPress={Actions.scenicProduct}
           >
             <Image source={require('../../../assets/travlPark/travlPark.jpg')} style={{width: deviceWidth, height: deviceWidth > '340' ? 200 : 180}}>
               <View style={[styles.pictureThemeView]}>
                 <Text style={[styles.pictureThemeText]}>香港</Text>
               </View>
             </Image>
           </Button>
           {/*<View>*/}
             {/*<TouchableOpacity style={styles.flexAll} onPress={Actions.scenicList}>*/}
               {/*<View style={{flex:1, flexDirection: 'row'}}>*/}
                 {/*<View >*/}
                   {/*<Text style={{color: '#333',fontSize: 15}}>预订</Text>*/}
                 {/*</View>*/}
               {/*</View>*/}
               {/*<View >*/}
                 {/*<Image style={{width: 9, height: 16, marginLeft: 10}} source={require('../../../assets/home/2X/right_btn.png')}/>*/}
               {/*</View>*/}
             {/*</TouchableOpacity>*/}
             {/*<TouchableOpacity style={styles.flexAll} onPress={Actions.inPark}>*/}
               {/*<View style={{flex:1, flexDirection: 'row'}}>*/}
                 {/*<View >*/}
                   {/*<Text style={{color: '#333',fontSize: 15}}>入园</Text>*/}
                 {/*</View>*/}
               {/*</View>*/}
               {/*<View >*/}
                 {/*<Image style={{width: 9, height: 16, marginLeft: 10}} source={require('../../../assets/home/2X/right_btn.png')}/>*/}
               {/*</View>*/}
             {/*</TouchableOpacity>*/}
             {/*<TouchableOpacity style={styles.flexAll} onPress={Actions.travlPark}>*/}
               {/*<View style={{flex:1, flexDirection: 'row'}}>*/}
                 {/*<View >*/}
                   {/*<Text style={{color: '#333',fontSize: 15}}>游园</Text>*/}
                 {/*</View>*/}
               {/*</View>*/}
               {/*<View >*/}
                 {/*<Image style={{width: 9, height: 16, marginLeft: 10}} source={require('../../../assets/home/2X/right_btn.png')}/>*/}
               {/*</View>*/}
             {/*</TouchableOpacity>*/}

           {/*</View>*/}

         </ScrollView>

      </View>
    );
  }
  renderItem(item) {

    return (
      <Button key={item.name} style={[styles.button]} onPress={() => {
        this.getAction(item.name);
      } }>
        <Image style={{height: 40, width: 40}} source={item.icon}/>
        <Text style={{marginTop: 5, fontSize: 15, color: '#1d1d1d'}}>
          {item.name}
        </Text>
      </Button>
    );
  }
  getAction(obj) {
    switch (obj) {
      case '预定':
        Actions.scenicList();
        break;
      case '入园':
        Actions.inPark();
        break;
      case '游园':
        Actions.travlPark();
        break;
      default:

    }
  }

}
/**
 *  Class: Button
 *  Author: Niu Xiaoyu
 *  Date: 16/3/31.
 *  Description: 按钮
 */
import React, { Component } from 'react';

import StyleSheetPropType from 'react-native/Libraries/StyleSheet/StyleSheetPropType';
import TextStylePropTypes from 'react-native/Libraries/Text/TextStylePropTypes';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  PropTypes,
  ActivityIndicator
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    height: 30,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  textButton: {
    fontSize: 18,
    alignSelf: 'center',
  },
  spinner: {
    alignSelf: 'center'
  },
  opacity: {
    opacity: 0.5
  }
});

class Button extends Component {
  /**
   * 默认属性
   * isDisabled: 禁用按钮
   * delayPress: 按钮点击后设置为disable状态,2秒后恢复,默认为true
   */
  static defaultProps = Object.assign({},
    TouchableOpacity.propTypes,
    {
      isLoading: false,
      isDisabled: false,
      delayPress: true
    }
  );

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      delayEabled: false
    };
    this.onPress = this.onPress.bind(this);
  }
  
  
  _renderInnerText() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator
          animating={true}
          size="small"
          style={styles.spinner}
          color={this.props.activityIndicatorColor || 'black'}
        />
      );
    }
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {this.props.children}
      </View>
    );
  }

  componentWillUnmount() {
    if(this.delayPressTimer) {
      clearInterval(this.delayPressTimer);
    }
  }

  // 渲染
  render() {
    let touchableProps = {
      onPress: this.onPress,
      onPressIn: this.props.onPressIn,
      onPressOut: this.props.onPressOut,
      onLongPress: this.props.onLongPress
    };

    if (this.props.isDisabled === true ||
        this.props.isLoading === true ||
        this.state.delayEabled === true
    ) {
      return (
        <View style={[styles.button, this.props.style, styles.opacity]}>
          {this._renderInnerText()}
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          {...touchableProps}
          style={[styles.button, this.props.style]}
        >
          {this._renderInnerText()}
        </TouchableOpacity>
        
      );
    }
  }

  onPress() {
    const me = this;
    if (me.props.onPress && me.props.delayPress) {
      me.setState({delayEabled: true},
        () => {
          me.props.onPress();
          me.delayPressTimer = setTimeout(() => {me.setState({delayEabled: false});}, 2000);
        }
      );
    } else {
      me.props.onPress && me.props.onPress();
    }
  }
}


export default Button;

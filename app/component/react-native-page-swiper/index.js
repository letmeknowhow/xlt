let _extends = Object.assign || function (target) {
  for (let i = 1; i < arguments.length; i++) {
    let source = arguments[i];
    for (let key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
import React, { Component } from 'react';
import { Animated, Dimensions, PanResponder, View } from 'react-native';

import Dots from './dots';

export default class Swiper extends Component {

  constructor(props) {
    super(props);

    this.state = {
      index: 1,
      scrollValue: new Animated.Value(props.index + 1),
      viewWidth: Dimensions.get('window').width
    };

    this.startAutoPlay = this.startAutoPlay.bind(this);
    this.stopAutoPlay = this.stopAutoPlay.bind(this);
  }

  componentWillMount() {
    const release = (e, gestureState) => {
      if (this.props.children && this.props.children.length > 1) {
        this.startAutoPlay();
      }
      const relativeGestureDistance = gestureState.dx / this.state.viewWidth;
      const { vx } = gestureState;

      let newIndex = this.state.index;

      if (relativeGestureDistance < -0.5 || relativeGestureDistance < 0 && vx <= -0.5) {
        newIndex = newIndex + 1;
      } else if (relativeGestureDistance > 0.5 || relativeGestureDistance > 0 && vx >= 0.5) {
        newIndex = newIndex - 1;
      }

      this.goToPage(newIndex);
    };

    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => {
        const { threshold } = this.props;

        // Claim responder if it's a horizontal pan
        if (Math.abs(gestureState.dx) > Math.abs(gestureState.dy)) {
          this.stopAutoPlay();
          return true;
        }

        // and only if it exceeds the threshold
        if (threshold - Math.abs(gestureState.dx) > 0) {
          return false;
        }
      },

      // Touch is released, scroll to the one that you're closest to
      onPanResponderRelease: release,
      onPanResponderTerminate: release,

      // Dragging, move the view with the touch
      onPanResponderMove: (e, gestureState) => {
        let dx = gestureState.dx;
        let offsetX = -dx / this.state.viewWidth + this.state.index;

        this.state.scrollValue.setValue(offsetX);
      }
    });

    // start autoplay
    if (this.props.autoPlay && this.props.children && this.props.children.length > 1) {
      this.startAutoPlay();
    }
  }

  componentWillUnmount() {
    this.stopAutoPlay();
  }

  componentDidUpdate() {
    if (!this.autoPlayTimer && this.props.autoPlay && this.props.children && this.props.children.length > 1) {
      this.startAutoPlay();
    }
  }
  goToPage(pageNumber) {
    // Don't scroll outside the bounds of the screens
    let pageNo = Math.max(0, Math.min(pageNumber, this.props.children.length - 1));
    if (this.props.children && this.props.children.length > 1) {
      if (pageNo === this.props.children.length - 1) {
        pageNo = 1;
      } else if (pageNo === 0) {
        pageNo = this.props.children.length - 2;
      }
    }
    this.setState({
      index: pageNo
    });

    Animated.spring(this.state.scrollValue, {
      toValue: pageNo,
      friction: this.props.springFriction,
      tension: this.props.springTension
    }).start();

    this.props.onPageChange(pageNo);
  }

  handleLayout(event) {
    const { width } = event.nativeEvent.layout;

    if (width) {
      this.setState({viewWidth: width});
    }
  }

  render() {
    if (!this.props.children) {
      return (
        <View />
      );
    } else if (this.props.children.length === 1) {
      return (
        <View>
          {this.props.children}
        </View>
      );
    }
    const scenes = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {style: [child.props.style, {flex: 1}]});
    });

    const translateX = this.state.scrollValue.interpolate({
      inputRange: [0, 1], outputRange: [0, -this.state.viewWidth]
    });

    const sceneContainerStyle = {
      width: this.state.viewWidth * this.props.children.length,
      flex: 1,
      flexDirection: 'row'
    };

    return React.createElement(
      View,
      {style: {flex: 1, overflow: 'hidden'}, onLayout: this.handleLayout.bind(this)},
      React.createElement(
        Animated.View,
        _extends({}, this._panResponder.panHandlers, {
          style: [sceneContainerStyle, {transform: [{translateX}]}]
        }),
        scenes
      ),
      this.props.pager && React.createElement(Dots, {
        active: this.state.index - 1,
        activeColor: this.props.activeDotColor,
        color: this.props.dotColor,
        total: this.props.children.length - 2,
        style: {position: 'absolute', bottom: 3, width: this.state.viewWidth}
      })
    );
  }

  startAutoPlay() {
    const me = this;
    me.autoPlayTimer = setInterval(() => {
      let pageNumber = this.state.index;
      const pageCount = this.props.children.length;
      if (pageNumber == pageCount - 1) {
        pageNumber = 0;
      } else {
        pageNumber += 1;
      }
      me.goToPage(pageNumber);
    }, this.props.duration || 5000);
  }

  stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
    }
  }
}
Swiper.propTypes = {
  children: React.PropTypes.node.isRequired,
  index: React.PropTypes.number,
  threshold: React.PropTypes.number,
  pager: React.PropTypes.bool,
  onPageChange: React.PropTypes.func,
  activeDotColor: React.PropTypes.string
};
Swiper.defaultProps = {
  index: 0,
  pager: true,
  threshold: 25,
  onPageChange: () => {
  },
  activeDotColor: 'blue'
};
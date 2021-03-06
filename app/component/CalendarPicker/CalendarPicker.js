/**
 *  Class: CalendarPicker
 *  Author: Niu Xiaoyu
 *  Date: 16/9/11.
 *  Description: 日历
 */
import React, { Component, PropTypes } from 'react';

import { Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import {
  WEEKDAYS,
  MONTHS,
  MAX_ROWS,
  MAX_COLUMNS,
  getDaysCountInMonth
} from './Util';

import makeStyles from './makeStyles';

//以IPhone6的宽度为参考宽度
const IPHONE6_WIDTH = 375;
const initialScale = Dimensions.get('window').width / IPHONE6_WIDTH;
const styles = StyleSheet.create(makeStyles(initialScale));

export default class CalendarPicker extends Component {
  // 默认属性
  static defaultProps = {
    weekdays: WEEKDAYS
  };

  // 属性类型
  static propTypes = {
    maxDate: React.PropTypes.instanceOf(Date),
    minDate: React.PropTypes.instanceOf(Date),
    selectedDate: React.PropTypes.instanceOf(Date).isRequired,
    onDateChange: React.PropTypes.func,
    screenWidth: React.PropTypes.number,
    startFromMonday: React.PropTypes.bool,
    weekdays: React.PropTypes.array,
    months: React.PropTypes.array,
    previousTitle: React.PropTypes.string,
    nextTitle: React.PropTypes.string,
    selectedDayColor: React.PropTypes.string,
    selectedDayTextColor: React.PropTypes.string,
    scaleFactor: React.PropTypes.number,
    textStyle: Text.propTypes.style
  };

  constructor(props) {
    super(props);
    this.state = {
      date: this.props.selectedDate,
      day: this.props.selectedDate.getDate(),
      month: this.props.selectedDate.getMonth(),
      year: this.props.selectedDate.getFullYear(),
      selectedDay: []
    };

    this.getPrevYear = this.getPrevYear.bind(this);
    this.getNextYear = this.getNextYear.bind(this);
    this.onMonthChange = this.onMonthChange.bind(this);
    this.onDayChange = this.onDayChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      date: newProps.selectedDate,
      day: newProps.selectedDate.getDate(),
      month: newProps.selectedDate.getMonth(),
      year: newProps.selectedDate.getFullYear()
    });
  }

  onDayChange(day) {
    this.setState({day: day.day}, () => {
      this.onDateChange();
    });
  }

  onMonthChange(month) {
    this.setState({month}, () => {
      //this.onDateChange();
    });
  }

  getNextYear() {
    this.setState({year: this.state.year + 1}, () => {
      //this.onDateChange();
    });
  }

  getPrevYear() {
    this.setState({year: this.state.year - 1}, () => {
      //this.onDateChange();
    });
  }

  onDateChange() {
    let {
        day,
        month,
        year
        } = this.state;
    let date = new Date(year, month, day);

    this.setState({date});
    this.props.onDateChange(date);
  }

  render() {
    return (
      <View style={styles.calendar}>
        <HeaderControls
          maxDate={this.props.maxDate}
          minDate={this.props.minDate}
          year={this.state.year}
          month={this.state.month}
          onMonthChange={this.onMonthChange}
          getNextYear={this.getNextYear}
          getPrevYear={this.getPrevYear}
          months={this.props.months}
          previousTitle={this.props.previousTitle}
          nextTitle={this.props.nextTitle}
          textStyle={this.props.textStyle}/>

        <WeekDaysLabels
          screenWidth={this.props.screenWidth}
          weekdays={this.props.weekdays}
          textStyle={this.props.textStyle}/>

        <Days
          dateComment={this.props.dateComment}
          maxDate={this.props.maxDate}
          minDate={this.props.minDate}
          month={this.state.month}
          year={this.state.year}
          date={this.state.date}
          onDayChange={this.onDayChange}
          screenWidth={this.props.screenWidth}
          startFromMonday={this.props.startFromMonday}
          selectedDayColor={this.props.selectedDayColor}
          selectedDayTextColor={this.props.selectedDayTextColor}
          textStyle={this.props.textStyle}/>
      </View>
    );
  }
}

class Days extends Component {
  static propTypes = {
    maxDate: React.PropTypes.instanceOf(Date),
    minDate: React.PropTypes.instanceOf(Date),
    date: React.PropTypes.instanceOf(Date).isRequired,
    month: React.PropTypes.number.isRequired,
    year: React.PropTypes.number.isRequired,
    onDayChange: React.PropTypes.func.isRequired,
    selectedDayColor: React.PropTypes.string,
    selectedDayTextColor: React.PropTypes.string,
    textStyle: Text.propTypes.style
  };

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      selectedStates: []
    };

    this.onPressDay = this.onPressDay.bind(this);
    this.updateSelectedStates = this.updateSelectedStates.bind(this);
    this.getCalendarDays = this.getCalendarDays.bind(this);
  }

  componentDidMount() {
    this.updateSelectedStates(this.props.date.getDate(), this.props.month, new Date(this.props.date).getMonth(), this.props.year, new Date(this.props.date).getFullYear());
  }

  componentWillReceiveProps(newProps) {
    this.updateSelectedStates(newProps.date.getDate(), newProps.month, new Date(newProps.date).getMonth(), newProps.year, new Date(newProps.date).getFullYear());
  }

  updateSelectedStates(day, selectedMonth, month, selectedYear, year) {
    let selectedStates = [];
    let daysInMonth = getDaysCountInMonth(this.props.month, this.props.year);
    let i;
    for (i = 1; i <= daysInMonth; i++) {
      if (i === day && selectedMonth === month && selectedYear === year) {
        selectedStates.push(true);
      } else {
        selectedStates.push(false);
      }
    }

    this.setState({
      selectedStates
    });

  }

  onPressDay(day) {
    this.updateSelectedStates(day);
    this.props.onDayChange({day});
  }

  getCalendarDays() {
    let columns;
    let matrix = [];
    let month = this.props.month;
    let year = this.props.year;
    let currentDay = 0;
    let thisMonthFirstDay = this.props.startFromMonday ? new Date(year, month, 0) : new Date(year, month, 1);
    let slotsAccumulator = 0;

    for (let i = 0; i < MAX_ROWS; i++) { // Week rows
      columns = [];

      for (let j = 0; j < MAX_COLUMNS; j++) { // Day columns
        if (slotsAccumulator >= thisMonthFirstDay.getDay()) {
          if (currentDay < getDaysCountInMonth(month, year)) {
            let dateComment = this.props.dateComment &&
              this.props.dateComment[year] &&
              this.props.dateComment[year][month + 1] &&
              this.props.dateComment[year][month + 1][currentDay + 1] || ' ';
            columns.push(<Day
              key={j}
              dateComment={dateComment}
              day={currentDay + 1}
              selected={this.state.selectedStates[currentDay]}
              date={new Date(year, month, currentDay + 1)}
              maxDate={this.props.maxDate}
              minDate={this.props.minDate}
              onDayChange={this.onPressDay}
              screenWidth={this.props.screenWidth}
              selectedDayColor={this.props.selectedDayColor}
              selectedDayTextColor={this.props.selectedDayTextColor}
              textStyle={this.props.textStyle}/>);
            currentDay++;
          }
        } else {
          columns.push(<Day
            key={j}
            day={''}
            screenWidth={this.props.screenWidth}/>);
        }

        slotsAccumulator++;
      }
      matrix[i] = [];
      matrix[i].push(<View style={styles.weekRow}>{columns}</View>);
    }
    return matrix;
  }

  render() {
    return <View style={styles.daysWrapper}>{ this.getCalendarDays() }</View>;
  }

}

class Day extends Component {
  static propTypes = {
    date: React.PropTypes.instanceOf(Date),
    onDayChange: React.PropTypes.func,
    maxDate: React.PropTypes.instanceOf(Date),
    minDate: React.PropTypes.instanceOf(Date),
    selected: React.PropTypes.bool,
    day: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string
    ]).isRequired,
    screenWidth: React.PropTypes.number,
    startFromMonday: React.PropTypes.bool,
    selectedDayColor: React.PropTypes.string,
    selectedDayTextColor: React.PropTypes.string,
    textStyle: Text.propTypes.style
  };

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
    this.DAY_WIDTH = (this.props.screenWidth - 16) / 7;
    this.SELECTED_DAY_WIDTH = (this.props.screenWidth - 16) / 7 - 10;
    this.BORDER_RADIUS = this.SELECTED_DAY_WIDTH / 2;
  }

  render() {
    const comment = this.props.dateComment;
    let textStyle = this.props.textStyle;
    if (this.props.selected) {
      let selectedDayColorStyle = this.props.selectedDayColor ? {color: this.props.selectedDayColor} : {};
      let selectedDayTextColorStyle = this.props.selectedDayTextColor ? {color: this.props.selectedDayTextColor} : {};
      return (
        <View style={[styles.dayWrapper]}>
            <TouchableOpacity
              style={[styles.dayButton, styles.dayButtonSelected]}
              onPress={() => this.props.onDayChange(this.props.day) }>
              <Text style={[styles.dayLabel, textStyle, selectedDayTextColorStyle]}>
                {this.props.day}
              </Text>
              <Text style={[styles.dateCommentLabel, selectedDayColorStyle]}>{(!comment || comment === ' ' || comment === '0') ? '' : ('￥' + comment)}</Text>
            </TouchableOpacity>
        </View>
      );
    } else {
      if (this.props.date < this.props.minDate || this.props.date > this.props.maxDate || comment === undefined || comment === ' ' || comment === '0') {
        return (
          <View style={styles.dayWrapper}>
            <Text style={[styles.dayLabel, textStyle, styles.disabledTextColor]}>
              {this.props.day}
            </Text>
            <Text style={styles.dateCommentLabel}>{(!comment || comment === ' ' || comment === '0') ? '' : ('￥' + comment)}</Text>
          </View>
        );
      }
      else {
        return (
          <View style={styles.dayWrapper}>
            <TouchableOpacity
              style={styles.dayButton}
              onPress={() => this.props.onDayChange(this.props.day) }>
              <Text style={[styles.dayLabel, textStyle]}>
                {this.props.day}
              </Text>
              <Text style={styles.dateCommentLabel}>{(!comment || comment === ' ' || comment === '0') ? '' : ('￥' + comment)}</Text>
            </TouchableOpacity>
          </View>
        );
      }
    }
  }
}

class WeekDaysLabels extends Component {
  static propTypes = {
    screenWidth: React.PropTypes.number,
    textStyle: Text.propTypes.style
  };

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
    //this.DAY_WIDTH = (this.props.screenWidth - 16) / 7;
  }

  render() {
    return (
      <View style={styles.dayLabelsWrapper}>
        { (this.props.weekdays || WEEKDAYS).map((day, key) => {
          return <Text key={key} style={[styles.dayLabels, this.props.textStyle]}>{day}</Text>;
        }) }
      </View>
    );
  }
}

class HeaderControls extends Component {
  static propTypes = {
    month: React.PropTypes.number.isRequired,
    year: React.PropTypes.number,
    getNextYear: React.PropTypes.func.isRequired,
    getPrevYear: React.PropTypes.func.isRequired,
    onMonthChange: React.PropTypes.func.isRequired,
    textStyle: Text.propTypes.style
  };

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      selectedMonth: this.props.month
    };

    this.getNext = this.getNext.bind(this);
    this.getPrevious = this.getPrevious.bind(this);
    this.previousMonthDisabled = this.previousMonthDisabled.bind(this);
    this.nextMonthDisabled = this.nextMonthDisabled.bind(this);
    this.nextMonthDisabled = this.nextMonthDisabled.bind(this);
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      selectedMonth: newProps.month
    });
  }
  getNext() {
    let next = this.state.selectedMonth + 1;
    if (next > 11) {
      this.setState({selectedMonth: 0},
        // Run this function as a callback to ensure state is set first
        () => {
          this.props.getNextYear();
          this.props.onMonthChange(this.state.selectedMonth);
        }
      );
    } else {
      this.setState({selectedMonth: next},
        () => {
          this.props.onMonthChange(this.state.selectedMonth);
        }
      );
    }
  }

  getPrevious() {
    let prev = this.state.selectedMonth - 1;
    if (prev < 0) {
      this.setState({selectedMonth: 11},
        // Run this function as a callback to ensure state is set first
        () => {
          this.props.getPrevYear();
          this.props.onMonthChange(this.state.selectedMonth);
        }
      );
    } else {
      this.setState({selectedMonth: prev},
        () => {
          this.props.onMonthChange(this.state.selectedMonth);
        }
      );
    }
  }

  previousMonthDisabled() {
    return (this.props.minDate &&
      (this.props.year < this.props.minDate.getFullYear() ||
        (this.props.year == this.props.minDate.getFullYear() && this.state.selectedMonth <= this.props.minDate.getMonth())
      )
    );
  }

  nextMonthDisabled() {
    return (this.props.maxDate &&
      (this.props.year > this.props.maxDate.getFullYear() ||
        (this.props.year == this.props.maxDate.getFullYear() && this.state.selectedMonth >= this.props.maxDate.getMonth())
      )
    );
  }

  render() {
    let textStyle = this.props.textStyle;

    let previous;
    if (this.previousMonthDisabled()) {
      previous = (
        <Text style={[styles.prev, textStyle, styles.disabledTextColor]}>{this.props.previousTitle || 'Previous'}</Text>
      );
    }
    else {
      previous = (
        <TouchableOpacity onPress={this.getPrevious}>
          <Text style={[styles.prev, textStyle]}>{this.props.previousTitle || 'Previous'}</Text>
        </TouchableOpacity>
      );
    }

    let next;
    if (this.nextMonthDisabled()) {
      next = (
        <Text style={[styles.next, textStyle, styles.disabledTextColor]}>{this.props.nextTitle || 'Next'}</Text>
      );
    }
    else {
      next = (
        <TouchableOpacity onPress={this.getNext}>
          <Text style={[styles.next, textStyle]}>{this.props.nextTitle || 'Next'}</Text>
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.headerWrapper}>
        <View style={styles.monthSelector}>
          {previous}
        </View>
        <View>
          <Text style={[styles.monthLabel, textStyle]}>
            { (this.props.months || MONTHS)[this.state.selectedMonth] } { this.props.year }
          </Text>
        </View>
        <View style={styles.monthSelector}>
          {next}
        </View>

      </View>
    );
  }
}
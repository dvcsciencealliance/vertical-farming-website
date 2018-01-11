import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import DataVisualization from './DataVisualization';
import DataInput from './DataInput';
import moment from 'moment';

import './DataContainer.css';

class DataContainer extends Component {
  state = {
    startDate: moment().toDate(),
    startTime: moment().subtract(30, 'minutes').toDate(),
    endDate: moment().toDate(),
    endTime: moment().toDate(),
    sensor: "pH",
    editing: false
  };

  edit() {
    this.setState({
      editing: true
    });
  }

  submit(startDate, startTime, endDate, endTime, sensor) {
    this.setState({
      startDate,
      startTime,
      endDate,
      endTime,
      sensor,
      editing: false
    });
  }

  render() {
    let view;
    if (this.state.editing) {
      view = <DataInput id={"input-" + this.props.id} submit={this.submit.bind(this)} inputData={{
          "startDate": this.state.startDate,
          "startTime": this.state.startTime,
          "endDate": this.state.endDate,
          "endTime": this.state.endTime,
          "sensor": this.state.sensor
        }}/>;
    } else {
      view = <DataVisualization id={"visualization-" + this.props.id} edit={this.edit.bind(this)} inputData={{
          "startDate": this.state.startDate,
          "startTime": this.state.startTime,
          "endDate": this.state.endDate,
          "endTime": this.state.endTime,
          "sensor": this.state.sensor
        }}/>;
    }

    return (
      <div className="DataContainer">
        <Paper className="paper" zDepth={3}>
          {view}
        </Paper>
      </div>
    );
  }
}

export default DataContainer;

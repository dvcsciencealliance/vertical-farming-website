import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import DataVisualization from './DataVisualization';
import DataInput from './DataInput';
import './DataContainer.css';

class DataContainer extends Component {
  state = {
    startDate: new Date(),
    startTime: new Date(new Date().getTime() - 30*60000),
    endDate: new Date(),
    endTime: new Date(),
    sensor: "pH",
    fishTank: true,
    firstReservoir: false,
    secondReservoir: false,
    editing: false
  };

  edit() {
    this.setState({
      editing: true
    });
  }

  submit(startDate, startTime, endDate, endTime, sensor, fishTank, firstReservoir, secondReservoir) {
    this.setState({
      startDate,
      startTime,
      endDate,
      endTime,
      sensor,
      fishTank,
      firstReservoir,
      secondReservoir,
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
          "sensor": this.state.sensor,
          "fishTank": this.state.fishTank,
          "firstReservoir": this.state.firstReservoir,
          "secondReservoir": this.state.secondReservoir
        }}/>;
    } else {
      view = <DataVisualization id={"visualization-" + this.props.id} edit={this.edit.bind(this)} inputData={{
          "startDate": this.state.startDate,
          "startTime": this.state.startTime,
          "endDate": this.state.endDate,
          "endTime": this.state.endTime,
          "sensor": this.state.sensor,
          "fishTank": this.state.fishTank,
          "firstReservoir": this.state.firstReservoir,
          "secondReservoir": this.state.secondReservoir
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

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
    location: "Water",
    water: true,
    plants: false,
    air: false,
    editing: false
  };

  edit() {
    this.setState({
      editing: true
    });
  }

  submit(startDate, startTime, endDate, endTime) {
    this.setState({
      startDate,
      startTime,
      endDate,
      endTime,
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
          "location": this.state.location,
          "water": this.state.water,
          "plants": this.state.plants,
          "air": this.state.air
        }}/>;
    } else {
      view = <DataVisualization id={"visualization-" + this.props.id} edit={this.edit.bind(this)} inputData={{
          "startDate": this.state.startDate,
          "startTime": this.state.startTime,
          "endDate": this.state.endDate,
          "endTime": this.state.endTime,
          "location": this.state.location,
          "water": this.state.water,
          "plants": this.state.plants,
          "air": this.state.air
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

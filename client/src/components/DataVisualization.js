import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Chart from 'chart.js'
import RaisedButton from 'material-ui/RaisedButton';
import './DataVisualization.css';

function calculate(startDate, startTime, endDate, endTime) {

}

class DataVisualization extends Component {
  state = {
    startDate: this.props.inputData.startDate,
    startTime: this.props.inputData.startTime,
    endDate: this.props.inputData.endDate,
    endTime: this.props.inputData.endTime,
    location: this.props.inputData.location,
    dataSets: this.props.inputData.dataSets
  };

  edit() {
    this.props.edit();
  }

  componentDidMount() {
    var ctx = document.getElementById(this.props.id);
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
            label: 'Water',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
      },
      options: {
      }
    });
  }

  render() {
    return (
      <div className="DataVisualization">
        <div id="chart">
          <canvas id={this.props.id}></canvas>
        </div>
        <RaisedButton label="Edit" onTouchTap={this.edit.bind(this)} primary={true} />
      </div>
    );
  }
}

export default DataVisualization;

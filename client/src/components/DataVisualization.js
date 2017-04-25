import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import DataInput from './DataInput';
import Chart from 'chart.js'
import './DataVisualization.css';

function calculate(startDate, startTime, endDate, endTime) {

}

class DataVisualization extends Component {
  state = {
    startDate: null,
    startTime: null,
    endDate: null,
    endTime: null
  };

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
        <Paper className="paper" zDepth={1}>
          <div id="chart">
            <canvas id={this.props.id}></canvas>
          </div>
          <DataInput />
        </Paper>
      </div>
    );
  }
}

export default DataVisualization;

import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Chart from 'chart.js'
import RaisedButton from 'material-ui/RaisedButton';
import './DataVisualization.css';

//fishTask ph Temp
//Resourvour 1: EC pH Nitrate
// Reservrour 2: EC Temp

class DataVisualization extends Component {
  state = {
    startDate: this.props.inputData.startDate,
    startTime: this.props.inputData.startTime,
    endDate: this.props.inputData.endDate,
    endTime: this.props.inputData.endTime,
    sensor: this.props.inputData.sensor,
    fishTank: this.props.inputData.fishTank,
    firstReservoir: this.props.inputData.firstReservoir,
    secondReservoir: this.props.inputData.secondReservoir
  };

  edit() {
    this.props.edit();
  }

  componentDidMount() {
    let fishTankData;
    let firstReservoirData;
    let secondReservoirData;
    fetch('/data', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        startDate: this.state.startDate,
        startTime: this.state.startTime,
        endDate: this.state.endDate,
        endTime: this.state.endTime,
        sensor: this.state.sensor,
        fishTank: this.state.fishTank,
        firstReservoir: this.state.firstReservoir,
        secondReservoir: this.state.secondReservoir
      })
    })
    .then((response) => response.json())
    .then((responseJSON) => {
      if (responseJSON.success) {
        console.log('Success!');
        fishTankData = responseJSON.data[0];
        firstReservoirData = responseJSON.data[1];
        secondReservoirData = responseJSON.data[2];
      } else {
        console.log('Failure!');
      }
    })
    .catch((error) => {
      console.error(error);
    });

    const fishTankDataset = {
      label: 'Fish Tank',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }

    const firstReservoirDataset = {
      label: 'First Reservoir',
      data: [5, 12, 3, 14, 22, 33],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }

    const secondReservoirDataset = {
      label: 'Second Reservoir',
      data: [18, 19, 9, 7, 26, 3],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1
    }

    let datasets = [];
    if (this.state.fishTank) datasets.push(fishTankDataset);
    if (this.state.firstReservoir) datasets.push(firstReservoirDataset);
    if (this.state.secondReservoir) datasets.push(secondReservoirDataset);

    var ctx = document.getElementById(this.props.id);
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets
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

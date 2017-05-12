import React, { Component } from 'react';
import './DataInput.css';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class DataInput extends Component {
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

  submit() {
    this.props.submit(this.state.startDate, this.state.startTime, this.state.endDate, this.state.endTime, this.state.sensor, this.state.fishTank, this.state.firstReservoir, this.state.secondReservoir);
  }

  render() {
    return (
      <div className="DataInput">
        <div>
          <h3>Start time</h3>
          <DatePicker
            autoOk={true}
            value={this.state.startDate}
            onChange={(event, date) => this.setState({ startDate: date })}
          />
          <TimePicker
            autoOk={true}
            value={this.state.startTime}
            onChange={(event, time) => this.setState({ startTime: time })}
          />
        </div>
        <div>
          <h3>End time</h3>
          <DatePicker
            autoOk={true}
            value={this.state.endDate}
            onChange={(event, date) => this.setState({ endDate: date })}
          />
          <TimePicker
            autoOk={true}
            value={this.state.endTime}
            onChange={(event, time) => this.setState({ endTime: time })}
          />
        </div>
        <div>
          <h3>Sensor</h3>
          <SelectField
            value={this.state.sensor}
            onChange={(event, index, value) => this.setState({ sensor: value })}
            >
            <MenuItem value={"pH"} primaryText="pH" />
            <MenuItem value={"Tempertature"} primaryText="Temperature" />
            <MenuItem value={"Conductivity"} primaryText="Conductivity" />
            <MenuItem value={"Nitrate"} primaryText="Nitrate" />
          </SelectField>
        </div>
        <div>
          <h3>Locations</h3>
          <List>
            <ListItem
              leftCheckbox={<Checkbox
                defaultChecked={this.state.fishTank}
                onCheck={(event, checked) => this.setState({ fishTank: checked })}
                />}
              primaryText="Fish Tank"
            />
            <ListItem
              leftCheckbox={<Checkbox
                defaultChecked={this.state.firstReservoir}
                onCheck={(event, checked) => this.setState({ firstReservoir: checked })}
                />}
              primaryText="First Reservoir"
            />
            <ListItem
              leftCheckbox={<Checkbox
                defaultChecked={this.state.secondReservoir}
                onCheck={(event, checked) => this.setState({ secondReservoir: checked })}
                />}
              primaryText="Second Reservoir"
            />
          </List>
        </div>
        <RaisedButton label="Submit" onTouchTap={this.submit.bind(this)} primary={true} />
      </div>
    );
  }
}

export default DataInput;

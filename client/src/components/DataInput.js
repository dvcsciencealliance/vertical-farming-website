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
    location: this.props.inputData.location,
    water: this.props.inputData.water,
    plants: this.props.inputData.plants,
    air: this.props.inputData.air
  };

  submit() {
    this.props.submit(this.state.startDate, this.state.startTime, this.state.endDate, this.state.endTime, this.state.location, this.state.dataSets);
  }

  render() {
    return (
      <div className="DataInput">
        <div>
          <h3>Start</h3>
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
          <h3>End</h3>
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
          <h3>Location</h3>
          <SelectField
            value={this.state.location}
            onChange={(event, index, value) => this.setState({ location: value })}
            >
            <MenuItem value={"Water"} primaryText="Water" />
            <MenuItem value={"Plants"} primaryText="Plants" />
            <MenuItem value={"Air"} primaryText="Air" />
          </SelectField>
        </div>
        <div>
          <h3>Data Sets</h3>
          <List>
            <ListItem
              leftCheckbox={<Checkbox
                defaultChecked={this.state.water}
                onChange={(event, checked) => this.setState({ water: checked })}
                />}
              primaryText="Water"
            />
            <ListItem
              leftCheckbox={<Checkbox
                defaultChecked={this.state.plants}
                onChange={(event, checked) => this.setState({ plants: checked })}
                />}
              primaryText="Plants"
            />
            <ListItem
              leftCheckbox={<Checkbox
                defaultChecked={this.state.air}
                onChange={(event, checked) => this.setState({ air: checked })}
                />}
              primaryText="Air"
            />
          </List>
        </div>
        <RaisedButton label="Submit" onTouchTap={this.submit.bind(this)} primary={true} />
      </div>
    );
  }
}

export default DataInput;

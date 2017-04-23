import React, { Component } from 'react';
import './TimeInput.css';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class TimeInput extends Component {
  state = {
    start_date: new Date(),
    start_time: new Date(new Date().getTime() - 30*60000),
    end_date: new Date(),
    end_time: new Date()
  };

  submit() {

  }

  render() {
    return (
      <div className="TimeInput">
        <Paper className="paper" zDepth={1}>
          <div>
            <h3>Start</h3>
            <DatePicker
              autoOk={true}
              value={this.state.start_date}
              onChange={(event, date) => this.setState({ start_date: date })}
            />
            <TimePicker
              autoOk={true}
              value={this.state.start_time}
              onChange={(event, time) => this.setState({ start_time: time })}
            />
          </div>
          <div>
            <h3>End</h3>
            <DatePicker
              autoOk={true}
              value={this.state.end_date}
              onChange={(event, date) => this.setState({ end_date: date })}
            />
            <TimePicker
              autoOk={true}
              value={this.state.end_time}
              onChange={(event, time) => this.setState({ end_time: time })}
            />
          </div>
          <RaisedButton label="Submit" onTouchTap={this.submit.bind(this)} primary={true} />
        </Paper>
      </div>
    );
  }
}

export default TimeInput;

import React, { Component } from 'react';
import './Container.css';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import DoneIcon from 'material-ui/svg-icons/action/done';
import ClearIcon from 'material-ui/svg-icons/content/clear';

let id = 0;
function createData(time, date, temperature, pH, EC, status) {
  id += 1;
  return { id, time, date, temperature, pH, EC, status };
}

function getStatusIcon(status) {
  if (status) {
    return <DoneIcon />;
  } else {
    return <ClearIcon />;
  }
}

const data = [
  createData("12:00", "April 10, 2017", 24, 6.0, 4.0, true),
  createData("12:01", "April 10, 2017", 37, 9.0, 4.3, true),
  createData("12:02", "April 10, 2017", 24, 12.0, 6.0, false),
  createData("12:03", "April 10, 2017", 67, 8.3, 4.3, false),
  createData("12:04", "April 10, 2017", 49, 4.2, 3.9, true)
];

class Container extends Component {
  render() {
    return (
      <Paper className="paper" zDepth={3}>
        <h3>{this.props.name}</h3>
        <Table>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Time</TableHeaderColumn>
              <TableHeaderColumn>Date</TableHeaderColumn>
              <TableHeaderColumn>Temperature (C)</TableHeaderColumn>
              <TableHeaderColumn>pH</TableHeaderColumn>
              <TableHeaderColumn>EC</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {data.map((n) => {
              return (
                <TableRow key={n.id}>
                  <TableRowColumn>{n.time}</TableRowColumn>
                  <TableRowColumn>{n.date}</TableRowColumn>
                  <TableRowColumn>{n.temperature}</TableRowColumn>
                  <TableRowColumn>{n.pH}</TableRowColumn>
                  <TableRowColumn>{n.EC}</TableRowColumn>
                  <TableRowColumn>{getStatusIcon(n.status)}</TableRowColumn>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default Container;

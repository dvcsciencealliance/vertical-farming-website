import React, { Component } from 'react';
import './Container.css';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import DoneIcon from 'material-ui-icons/Done';
import ClearIcon from 'material-ui-icons/Clear';

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
      <Paper className="paper">
        <h3>{this.props.name}</h3>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Temperature (C)</TableCell>
              <TableCell>pH</TableCell>
              <TableCell>EC</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((n) => {
              return (
                <TableRow key={n.id}>
                  <TableCell>{n.time}</TableCell>
                  <TableCell>{n.date}</TableCell>
                  <TableCell>{n.temperature}</TableCell>
                  <TableCell>{n.pH}</TableCell>
                  <TableCell>{n.EC}</TableCell>
                  <TableCell>{getStatusIcon(n.status)}</TableCell>
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

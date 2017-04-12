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
function createData(pH, temperature, EC, status) {
  id += 1;
  return { id, pH, temperature, EC, status };
}

function getStatusIcon(status) {
  if (status) {
    return <DoneIcon />;
  } else {
    return <ClearIcon />;
  }
}

const data = [
  createData(6.0, 24, 4.0, true),
  createData(9.0, 37, 4.3, true),
  createData(16.0, 24, 6.0, false),
  createData(3.7, 67, 4.3, false),
  createData(16.0, 49, 3.9, true)
];

class Container extends Component {
  render() {
    return (
      <Paper className="paper">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell numeric>pH</TableCell>
              <TableCell numeric>Temperature (C)</TableCell>
              <TableCell numeric>EC</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((n) => {
              return (
                <TableRow key={n.id}>
                  <TableCell numeric>{n.pH}</TableCell>
                  <TableCell numeric>{n.temperature}</TableCell>
                  <TableCell numeric>{n.EC}</TableCell>
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
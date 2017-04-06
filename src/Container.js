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

let id = 0;
function createData(pH, temperature, EC) {
  id += 1;
  return { id, pH, temperature, EC };
}

const data = [
  createData(6.0, 24, 4.0),
  createData(9.0, 37, 4.3),
  createData(16.0, 24, 6.0),
  createData(3.7, 67, 4.3),
  createData(16.0, 49, 3.9)
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
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((n) => {
              return (
                <TableRow key={n.id}>
                  <TableCell numeric>{n.pH}</TableCell>
                  <TableCell numeric>{n.temperature}</TableCell>
                  <TableCell numeric>{n.EC}</TableCell>
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

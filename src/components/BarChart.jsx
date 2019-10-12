import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class Example extends PureComponent {
  state =  {
    data : []
  }

  componentDidMount  = () =>{
    console.log(this.props.positive);
    console.log(this.props.negative);
    this.setState({data : [{name : '', positive : this.props.positive, negative : this.props.negative }]})
  }


  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={this.state.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 100]}  />
        <Tooltip />
        <Legend />
        <Bar dataKey="positive" fill="#8884d8" barSize={80} />
        <Bar dataKey="negative" fill="#82ca9d" barSize={80} />
      </BarChart>
    );
  }
}

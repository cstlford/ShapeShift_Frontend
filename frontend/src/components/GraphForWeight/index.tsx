import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: '7/3/2023', weight: 300 },
  { date: '7/10/2023', weight: 295 },
  { date: '7/17/2023', weight: 290 },
  { date: '7/24/2023', weight: 285 },
  { date: '7/31/2023', weight: 280 },
  { date: '8/7/2023', weight: 275 },
  { date: '8/14/2023', weight: 270 },
  { date: '8/21/2023', weight: 265 },
  { date: '8/28/2023', weight: 260 },
  { date: '9/4/2023', weight: 255 },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[180, 310]} />
          <Tooltip />
          <Legend />
          <Line type="basis" dataKey="weight" stroke="#8884d8" activeDot={{ r: 8 }} />
          
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

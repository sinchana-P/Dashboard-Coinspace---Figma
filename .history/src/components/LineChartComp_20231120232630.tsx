import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const LineChartComp = () => {

    const data = [
        {
            name: 'group1',
            value: 200
        },
        {
            name: 'group2',
            value: 400
        },
        {
            name: 'group3',
            value: 100
        },
        {
            name: 'group4',
            value: 700
        },
        {
            name: 'group5',
            value: 900
        },
    ]

  return (
    <div>
        <h3>LineChart</h3>
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>

    </div>
  )
}


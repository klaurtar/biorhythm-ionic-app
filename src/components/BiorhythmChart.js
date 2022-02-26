import React from 'react';
import {
  LineChart,
  ResponsiveContainer,
  Line,
  XAxis,
  ReferenceLine,
  CartesianGrid,
} from 'recharts';
import './BiorhythmChart.css';

const BiorhythmChart = ({ data }) => {
  return (
    <ResponsiveContainer className="biorhythm-chart" width="100%" height={200}>
      <LineChart data={data}>
        <XAxis
          dataKey="date"
          ticks={[data[3].date, data[15].date, data[27].date]}
        />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <ReferenceLine x={data[15].date} />
        <Line
          type="natural"
          dot={false}
          dataKey="physical"
          className="physical"
        />
        <Line
          type="natural"
          dot={false}
          dataKey="emotional"
          className="emotional"
        />
        <Line
          type="natural"
          dot={false}
          dataKey="intellectual"
          className="intellectual"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BiorhythmChart;

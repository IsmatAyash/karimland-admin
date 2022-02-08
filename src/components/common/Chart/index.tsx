import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ChartCtr, ChartTitle } from './chart.styled';

type chartProps<T> = {
  title: string;
  dataKey: string;
  data: Array<T>;
  grid?: any;
};

function Chart<T>({ title, dataKey, data, grid }: chartProps<T>) {
  return (
    <ChartCtr>
      <ChartTitle>{title}</ChartTitle>
      <ResponsiveContainer width="100%" height="100%" aspect={4 / 1}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </ChartCtr>
  );
}

export default Chart;

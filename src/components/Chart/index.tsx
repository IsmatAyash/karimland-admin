import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ChartCtr, ChartTitle } from './chart.styled';

type UserData = {
  name: string;
  'Active User': number;
};

type chartProps = {
  title: string;
  data: Array<UserData>;
  dataKey: string;
  grid: any;
};

const Chart = ({ title, data, dataKey, grid }: chartProps) => {
  return (
    <ChartCtr>
      <ChartTitle>{title}</ChartTitle>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </ChartCtr>
  );
};

export default Chart;

import FeaturedInfo from '../../components/FeaturedInfo';
import { HomeCtr, HomeWidgets } from './home.styled';
import Chart from '../../components/Chart';

import { userData } from '../../data';

const Home = () => {
  return (
    <HomeCtr>
      <HomeWidgets>
        <FeaturedInfo />
      </HomeWidgets>
      <Chart
        title="Sales Analytics"
        data={userData}
        grid
        dataKey="Active User"
      />
    </HomeCtr>
  );
};

export default Home;

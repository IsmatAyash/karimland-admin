import FeaturedInfo from '../../components/FeaturedInfo';
import { HomeCtr, HomeWidgets } from './home.styled';
import Chart from '../../components/Chart';

import { userData } from '../../data';
import WidgitSm from '../../components/WidgitSm';
import WidgetLg from '../../components/WidgetLg';

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
      <HomeWidgets>
        <WidgitSm />
        <WidgetLg />
      </HomeWidgets>
    </HomeCtr>
  );
};

export default Home;

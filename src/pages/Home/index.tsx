import FeaturedInfo from '../../components/home/FeaturedInfo';
import { HomeCtr, HomeWidgets } from './home.styled';
import Chart from '../../components/common/Chart';

import { userData } from '../../data';
import WidgitSm from '../../components/home/WidgitSm';
import WidgetLg from '../../components/home/WidgetLg';

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

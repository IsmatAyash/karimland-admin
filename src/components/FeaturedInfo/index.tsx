import {
  FeaturedItem,
  Featured,
  FeaturedMoneyCtr,
  FeaturedTitle,
  FeaturedMoney,
  FeaturedMoneyRate,
  FeaturedSub,
  FeaturedIcon,
} from './featuredInfo.styled';
import { ArrowDownward, ArrowUpward, ArrowRight } from '@mui/icons-material';

const infos = [
  {
    id: 1,
    title: 'Revenues',
    money: 2140,
    rate: -11.4,
    icon: <ArrowDownward />,
    sub: 'Compared to last year',
  },
  {
    id: 2,
    title: 'Sales',
    money: 3440,
    rate: 5.4,
    icon: <ArrowUpward />,
    sub: 'Compared to last year',
  },
  {
    id: 3,
    title: 'Cost',
    money: 3140,
    rate: 0,
    icon: <ArrowRight />,
    sub: 'Compared to last year',
  },
];

const FeaturedInfo = () => {
  return (
    <Featured>
      {infos.map((info) => (
        <FeaturedItem key={info.id}>
          <FeaturedTitle>{info.title}</FeaturedTitle>
          <FeaturedMoneyCtr>
            <FeaturedMoney>${info.money}</FeaturedMoney>
            <FeaturedMoneyRate>
              {info.rate}{' '}
              <FeaturedIcon negative={info.rate < 0}>{info.icon}</FeaturedIcon>
            </FeaturedMoneyRate>
          </FeaturedMoneyCtr>
          <FeaturedSub>{info.sub}</FeaturedSub>
        </FeaturedItem>
      ))}
    </Featured>
  );
};

export default FeaturedInfo;

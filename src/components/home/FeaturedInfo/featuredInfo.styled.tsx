import styled from 'styled-components';
import { Icon } from '@mui/material';

export const Featured = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const FeaturedItem = styled.div`
  flex: 1;
  margin: 20px 0px;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: var(--box-shadow);
  box-shadow: var(--shadow-5);
`;

export const FeaturedTitle = styled.span`
  font-size: 20px;
`;

export const FeaturedMoneyCtr = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;

export const FeaturedMoney = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

export const FeaturedMoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

type IconProp = { negative: string };
export const FeaturedIcon = styled(Icon)<IconProp>`
  font-size: 14px;
  margin-left: 5px;
  color: ${({ negative }) => (negative === 'true' ? 'red' : 'green')};
`;

export const FeaturedSub = styled.span`
  font-size: 15px;
  color: grey;
`;

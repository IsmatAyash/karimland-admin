import styled from 'styled-components';
import { Icon } from '@mui/material';

export const WidgetSmCtr = styled.div`
  flex: 1;
  -webkit-box-shadow: var(--box-shadow);
  box-shadow: var(--shadow-5);
  padding: 20px;
  margin-right: 20px;
`;

export const WidgetSmTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

export const WidgetSmImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const WidgetSmList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const WidgetSmListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;

export const WidgetSmUser = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WidgetSmUsername = styled.span`
  font-weight: 600;
`;

export const WidgetSmUserTitle = styled.span`
  font-weight: 300;
`;

export const WidgetSmButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: var(--grey-300);
  color: var(--grey-900);
  cursor: pointer;
  gap: 4px;
`;

export const WidgetSmIcon = styled(Icon)`
  font-size: 16px !important;
  margin-right: 5px;
`;

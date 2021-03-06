import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarCtr = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: var(--white);
  position: sticky;
  top: 50px;
`;

export const SidebarWrapper = styled.div`
  padding: 20px;
  color: var(--grey-200);
`;

export const SidebarMenu = styled.div`
  margin-bottom: 10px;
`;

export const SidebarTitle = styled.h3`
  font-size: 13px;
  color: var(--grey-500);
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 5px;
`;

export const SidebarListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;

  &:active,
  &:hover {
    background-color: var(--grey-200);
  }
`;

export const SidebarIcon = styled.div`
  margin-right: 5px;
  font-size: 20px !important;
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

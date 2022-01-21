import React from 'react';
import {
  Logo,
  NavbarCtr,
  NavbarWrapper,
  NavbarRight,
  NavbarIconBadge,
  NavbarIconContainer,
  NavbarAvatar,
  NavbarLeft,
} from './navbar.styled';
import { NotificationsNone, Settings, Language } from '@mui/icons-material';

const Navbar = () => {
  return (
    <NavbarCtr>
      <NavbarWrapper>
        <NavbarLeft>
          <Logo src="logo.jpg" alt="karim land logo" />
        </NavbarLeft>
        <NavbarRight>
          <NavbarIconContainer>
            <NotificationsNone />
            <NavbarIconBadge>2</NavbarIconBadge>
          </NavbarIconContainer>
          <NavbarIconContainer>
            <Language />
            <NavbarIconBadge>2</NavbarIconBadge>
          </NavbarIconContainer>
          <NavbarIconContainer>
            <Settings />
          </NavbarIconContainer>
          <NavbarAvatar
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="Navbar avatar"
          />
        </NavbarRight>
      </NavbarWrapper>
    </NavbarCtr>
  );
};

export default Navbar;

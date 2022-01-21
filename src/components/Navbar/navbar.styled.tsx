import styled from 'styled-components';

export const NavbarCtr = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarWrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 60px;
  height: 40px;
  cursor: pointer;
`;

export const NavbarRight = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarIconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color: #555;
`;

export const NavbarIconBadge = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  top: -5px;
  right: 0px;
  background-color: red;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

export const NavbarAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

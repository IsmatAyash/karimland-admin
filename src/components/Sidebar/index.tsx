import {
  LinkWrapper,
  SidebarCtr,
  SidebarIcon,
  SidebarList,
  SidebarListItem,
  SidebarMenu,
  SidebarTitle,
  SidebarWrapper,
} from './sidebar.styled';
import { sidebarItems } from './sidebarItems';

const Sidebar = () => {
  return (
    <SidebarCtr>
      <SidebarWrapper>
        {sidebarItems.map((sideItem) => (
          <SidebarMenu key={`sidebar-${sideItem.id}`}>
            <SidebarTitle>{sideItem.title}</SidebarTitle>
            <SidebarList>
              {sideItem.subItems.map((subItem) => (
                <LinkWrapper to={subItem.path} key={`sidebar-${subItem.id}`}>
                  <SidebarListItem>
                    <SidebarIcon>{subItem.icon}</SidebarIcon>
                    {subItem.title}
                  </SidebarListItem>
                </LinkWrapper>
              ))}
            </SidebarList>
          </SidebarMenu>
        ))}
      </SidebarWrapper>
    </SidebarCtr>
  );
};

export default Sidebar;

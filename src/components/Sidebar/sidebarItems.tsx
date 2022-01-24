import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
} from '@mui/icons-material';

export const sidebarItems = [
  {
    id: '1',
    title: 'Dashboard',
    subItems: [
      { id: '11', title: 'Home', icon: <LineStyle />, path: '/' },
      { id: '12', title: 'Analytics', icon: <Timeline />, path: '/' },
      { id: '13', title: 'Sales', icon: <TrendingUp />, path: '/' },
    ],
  },
  {
    id: '2',
    title: 'Quick Menu',
    subItems: [
      { id: '21', title: 'Users', icon: <PermIdentity />, path: '/users' },
      { id: '22', title: 'Products', icon: <Storefront />, path: '/' },
      { id: '23', title: 'Transactions', icon: <AttachMoney />, path: '/' },
      { id: '24', title: 'Reports', icon: <BarChart />, path: '/' },
    ],
  },
  {
    id: '3',
    title: 'Notifications',
    subItems: [
      { id: '31', title: 'Mail', icon: <MailOutline />, path: '/' },
      { id: '32', title: 'Feedback', icon: <DynamicFeed />, path: '/' },
      { id: '33', title: 'Messages', icon: <ChatBubbleOutline />, path: '/' },
    ],
  },
];

import { Visibility } from '@mui/icons-material';
import {
  WidgetSmButton,
  WidgetSmImg,
  WidgetSmList,
  WidgetSmListItem,
  WidgetSmTitle,
  WidgetSmUser,
  WidgetSmUsername,
  WidgetSmUserTitle,
  WidgetSmCtr,
} from './widgitsm.styled';

const widgitSms = [
  {
    id: '1',
    image:
      'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500',
    username: 'Ismat Ayash',
    title: 'King of kings',
  },
  {
    id: '2',
    image:
      'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500',
    username: 'Ismat Ayash',
    title: 'King of kings',
  },
  {
    id: '3',
    image:
      'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500',
    username: 'Ismat Ayash',
    title: 'King of kings',
  },
  {
    id: '4',
    image:
      'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500',
    username: 'Ismat Ayash',
    title: 'King of kings',
  },
  {
    id: '5',
    image:
      'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500',
    username: 'Ismat Ayash',
    title: 'King of kings',
  },
];

const WidgitSm = () => {
  return (
    <WidgetSmCtr>
      <WidgetSmTitle>New Join Members</WidgetSmTitle>
      <WidgetSmList>
        {widgitSms.map((wsm) => (
          <WidgetSmListItem key={`widgitSm-${wsm.id}`}>
            <WidgetSmImg src={wsm.image} alt={wsm.username} />
            <WidgetSmUser>
              <WidgetSmUsername>{wsm.username}</WidgetSmUsername>
              <WidgetSmUserTitle>{wsm.title}</WidgetSmUserTitle>
            </WidgetSmUser>
            <WidgetSmButton>
              <Visibility />
              Display
            </WidgetSmButton>
          </WidgetSmListItem>
        ))}
      </WidgetSmList>
    </WidgetSmCtr>
  );
};

export default WidgitSm;

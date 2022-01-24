import {
  WidgetLgCtr,
  WidgetLgDate,
  WidgetLgImg,
  WidgetLgTable,
  WidgetLgTh,
  WidgetLgTitle,
  WidgetLgUser,
  WidgetLgAmount,
  WidgetLgButton,
} from './widgitLg.styled';

const dets = [
  {
    id: 1,
    image:
      'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Jack & Jones',
    trxDate: 'jan 22, 2022',
    trxAmount: 2122,
    trxStatus: 'Pending',
  },
  {
    id: 2,
    image:
      'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Ismat Ayash',
    trxDate: 'jan 22, 2022',
    trxAmount: 122.19,
    trxStatus: 'Approved',
  },
  {
    id: 3,
    image:
      'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Dusten Huffmen',
    trxDate: 'jan 22, 2000',
    trxAmount: 1234.19,
    trxStatus: 'Declined',
  },
  {
    id: 4,
    image:
      'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Charlise Theron',
    trxDate: 'Aug 22, 2018',
    trxAmount: 1234.19,
    trxStatus: 'Approved',
  },
  {
    id: 5,
    image:
      'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Julia Roberts',
    trxDate: 'jan 22, 2020',
    trxAmount: 1234.19,
    trxStatus: 'Pending',
  },
];

const WidgetLg = () => {
  return (
    <WidgetLgCtr>
      <WidgetLgTitle>Latest Transactions</WidgetLgTitle>
      <WidgetLgTable>
        <thead>
          <tr>
            <WidgetLgTh>Customer</WidgetLgTh>
            <WidgetLgTh>Date</WidgetLgTh>
            <WidgetLgTh>Amount</WidgetLgTh>
            <WidgetLgTh>Status</WidgetLgTh>
          </tr>
        </thead>
        <tbody>
          {dets.map((det) => (
            <tr key={det.id}>
              <WidgetLgUser>
                <WidgetLgImg src={det.image} alt={`${det.name}-avatar`} />
                <span>{det.name}</span>
              </WidgetLgUser>
              <WidgetLgDate>{det.trxDate}</WidgetLgDate>
              <WidgetLgAmount>${det.trxAmount}</WidgetLgAmount>
              <td>
                <WidgetLgButton status={det.trxStatus}>
                  {det.trxStatus}
                </WidgetLgButton>
              </td>
            </tr>
          ))}
        </tbody>
      </WidgetLgTable>
    </WidgetLgCtr>
  );
};

export default WidgetLg;

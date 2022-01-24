import styled from 'styled-components';

export const WidgetLgCtr = styled.div`
  flex: 2;
  -webkit-box-shadow: var(--box-shadow);
  box-shadow: var() (shadow-5);
  padding: 20px;
`;

export const WidgetLgTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;
export const WidgetLgTable = styled.table`
  width: 100%;
  border-spacing: 20px;
`;

export const WidgetLgTh = styled.th`
  text-align: left;
`;

export const WidgetLgUser = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

export const WidgetLgImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
export const WidgetLgDate = styled.td`
  font-weight: 300;
`;
export const WidgetLgAmount = styled.td`
  font-weight: 300;
`;

export const WidgetLgButton = styled.button`
  padding: 5px 7px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ status }) =>
    status === 'Approved'
      ? 'var(--green-light)'
      : status === 'Pending'
      ? 'var(--blue)'
      : 'var(--red-dark)'};
  color: ${({ status }) =>
    status === 'Approved'
      ? 'var(--green-light)'
      : status === 'Pending'
      ? 'var(--blue)'
      : 'var(--red-dark)'};
`;

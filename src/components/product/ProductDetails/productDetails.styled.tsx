import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const LeftCtr = styled.div`
  flex: 2;
`;

export const RightCtr = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-between;
  padding: 10px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

export const ProductImageCtr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    flex: 4;
    width: 70%;
    border-radius: 5px;
    object-fit: cover;
    padding: 5px;
  }

  > span {
    flex: 1;
    font-weight: 600;
  }
`;

export const ProductInfoItems = styled.div`
  margin-top: 10px;
  padding-left: 10px;
`;

export const ProductInfoItem = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 7px;
`;

export const ProductTitle = styled.span`
  font-weight: 500;
  color: var(--grey-700);
`;

export const ProductValue = styled.span`
  font-size: 16px;
`;

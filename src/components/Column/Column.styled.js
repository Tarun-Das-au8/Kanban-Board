import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 4px;
  
  &:first-child {
    margin-left: 0
  }
`;

export const Container = styled.div`
  min-width: 280px;
  max-width: 280px;
  border: 1px solid #f0f0f0;
  border-radius: 7px;
  background: #353570;
  padding: 4px;
  align-self: flex-start;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #5a5a9a;
  padding: 3px 4px;
  
  span {
    font-size: 18px;
    margin-left: 4px;
  }
`;

export const ColumnTitle = styled.h4`
  font-weight: 100;
  font-size: 16px;
  color: #fff;
  max-width: 140px;
  white-space: nowrap;
  overflow: hidden;
`;


export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
`;

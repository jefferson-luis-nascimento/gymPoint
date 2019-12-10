import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #eee;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 600%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;

export const HeaderLabel = styled.strong`
  font-size: 24px;
  font-weight: bold;
  color: #444;
  padding: 30px 0;
`;

export const Table = styled.table`
  width: 100%;
  border: none;
  border-radius: 4px;
  background: #fff;
  padding: 15px;

  tr th {
    font-size: 16px;
    color: #444;
    text-align: left;
    padding-bottom: 20px;
  }

  tr td {
    font-size: 16px;
    color: #666;
    text-align: left;
    line-height: 20px;
    padding: 5px 0;
  }
`;

export const BlueButton = styled.button`
  border: none;
  background: none;
  color: #4d85ee;
  font-size: 15px;
  transition: color 0.2s;

  &:hover {
    color: ${darken(0.2, '#4d85ee')};
  }
`;

export const RedButton = styled.button`
  border: none;
  background: none;
  color: #de3b3b;
  font-size: 15px;
  transition: color 0.2s;

  &:hover {
    color: ${darken(0.2, '#de3b3b')};
  }
`;

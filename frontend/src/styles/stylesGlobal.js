import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #eee;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 100%;
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

export const Header = styled.nav`
  display: flex;
  flex-direction: row;
  background: #eee;
  width: 100%;
  justify-content: space-between;
`;

export const HeaderOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonRegister = styled.button`
  justify-content: center;
  align-items: center;
  border: none;
  margin-right: 30px;
  border-radius: 4px;
  background: #ee4d64;
  padding: 5px 20px;
  height: 34px;

  &:hover {
    color: ${darken(0.2, '#ee4d64')};
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    span {
      font-weight: bold;
      font-size: 14px;
      color: #fff;
      padding-left: 10px;
    }
  }
`;

export const ButtonBack = styled.button.attrs({
  type: 'button',
})`
  justify-content: center;
  align-items: center;
  border: none;
  margin-right: 30px;
  border-radius: 4px;
  background: #aaa;
  padding: 5px 20px;
  height: 34px;

  &:hover {
    color: ${darken(0.2, '#aaa')};
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    span {
      font-weight: bold;
      font-size: 14px;
      color: #fff;
      padding-left: 10px;
    }
  }
`;

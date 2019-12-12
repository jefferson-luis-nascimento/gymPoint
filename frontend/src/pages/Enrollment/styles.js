import styled from 'styled-components';

export const Header = styled.nav`
  display: flex;
  flex-direction: row;
  background: #eee;
  width: 100%;
  justify-content: space-between;
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonFilterRegister = styled.button.attrs({
  type: 'button',
})`
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  background: #ee4d64;
  padding: 5px 20px;
  height: 34px;

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

import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

export const Container = styled.div`
  background: #eee;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 600%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  background: #fff;
`;

export const Header = styled.nav`
  display: flex;
  flex-direction: row;
  background: #eee;
  width: 100%;
  justify-content: space-between;
  padding: 30px 0;

  strong {
    font-size: 24px;
    font-weight: bold;
    color: #444;
  }
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
  margin-right: 30px;
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

export const FilterInput = styled.div`
  position: relative;

  input {
    border: 1px solid #aaa;
    border-radius: 4px;
    font-size: 14px;
    padding: 8px;
    padding-left: 40px;
  }
`;

export const Search = styled(MdSearch).attrs({
  size: 20,
  color: '#aaa',
})`
  z-index: 0;
  position: absolute;
  left: 8px;
  top: 8px;
`;

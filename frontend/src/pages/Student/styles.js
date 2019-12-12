import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

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
  position: absolute;
  left: 8px;
  top: 8px;
`;

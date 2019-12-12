import styled from 'styled-components';

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: none;
  border-radius: 4px;
  background: #fff;
  padding: 30px;

  label {
    font-size: 14px;
    color: #444;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    margin-bottom: 10px;
    font-size: 16px;
    color: #444;
  }

  span {
    color: #ee4d64;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px 0 0;
`;

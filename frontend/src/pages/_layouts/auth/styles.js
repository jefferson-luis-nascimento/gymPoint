import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ee4d64;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 100%;
  max-width: 315px;
  text-align: center;
  flex: 1;
  border-radius: 4px;
  padding: 20px 30px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
      text-align: left;
      font-size: 14px;
      font-weight: bold;
      color: #444444;
      margin-bottom: 10px;
    }

    input {
      border: 1px solid #eee;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 15px;

      &::placeholder {
        color: #999;
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0;
      height: 44px;
      background: #ee4d64;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, '#ee4d64')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

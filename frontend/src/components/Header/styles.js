import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 50px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 56px;
      height: 24px;
    }

    > a {
      font-weight: bold;
      color: #ee4d64;
      margin-right: 15px;
      padding-right: 15px;
      border-right: 1px solid #eee;
    }

    > div {
      display: flex;
      flex-direction: row;

      > a {
        font-size: 15px;
        margin: 0 10px;
        color: #999;
        font-weight: bold;
        transition: border-bottom 0.2s;

        .linkactive,
        :hover {
          border-bottom: 1px solid #333;
          color: #333;
        }
      }
    }
  }

  aside {
    display: flex;
    align-items: flex-end;
  }
`;

export const Profile = styled.div`
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      font-size: 14px;
      display: block;
      color: #333;
    }

    > a {
      display: block;
      margin-top: 2px;
      font-size: 14px;
      color: #ee4d64;
      font-weight: bold;
    }
  }
`;

import styled from 'styled-components';

export const ContainerModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0 10px;

  strong {
    font-size: 14px;
    color: #444;
  }
`;

export const ModalAnswer = styled.span`
  text-align: justify;
  font-size: 16px;
  line-height: 26px;
  color: #666;
  margin-bottom: 15px;
`;

export const ModalInput = styled.textarea.attrs({
  cols: 30,
  rows: 8,
})`
  display: block;
  width: 100%;
  height: 150px;
  word-wrap: true;
  color: #666;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  margin-bottom: 15px;
`;

export const ModalButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 4px;
  background: #de3b3b;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
`;

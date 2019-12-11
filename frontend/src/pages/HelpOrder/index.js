import React, { useState } from 'react';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';

import {
  ContainerModal,
  ModalTitle,
  ModalAnswer,
  ModalInput,
  ModalButton,
} from './styles';

import {
  Container,
  Content,
  HeaderLabel,
  Table,
  BlueButton,
  RedButton,
} from '~/styles/stylesGlobal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 400,
    height: 470,
    border: 0,
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

Modal.setAppElement('#root');

export default function HelpOrder() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Container>
        <Content>
          <HeaderLabel>Pedidos de Auxílio</HeaderLabel>
          <Table>
            <thead>
              <tr>
                <th>ALUNO</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Lennert Sebastian</strong>
                </td>
                <td>
                  <BlueButton onClick={openModal}>responder</BlueButton>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Lennert Sebastian</strong>
                </td>
                <td>
                  <BlueButton onClick={openModal}>responder</BlueButton>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Lennert Sebastian</strong>
                </td>
                <td>
                  <BlueButton onClick={openModal}>responder</BlueButton>
                </td>
              </tr>
            </tbody>
          </Table>
        </Content>
      </Container>
      {modalIsOpen && (
        <ContainerModal>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <ModalTitle>
              <strong>PERGUNTA DO ALUNO</strong>
              <RedButton onClick={closeModal}>
                <MdClose size={16} color="#de3b3b" />
              </RedButton>
            </ModalTitle>

            <ModalAnswer>
              Olá pessoal da academia, gostaria de saber se quando acordar devo
              ingerir batata doce e frango logo de primeira, preparar as
              marmitas e lotar a geladeira? Dou um pico de insulina e jogo o
              hipercalórico?
            </ModalAnswer>

            <ModalTitle>
              <strong>SUA RESPOSTA</strong>
            </ModalTitle>

            <ModalInput placeholder="Sua resposta" />

            <ModalButton>Responder Aluno</ModalButton>
          </Modal>
        </ContainerModal>
      )}
    </>
  );
}

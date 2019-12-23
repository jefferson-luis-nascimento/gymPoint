import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import { toast } from 'react-toastify';

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
  EmptyList,
} from '~/styles/stylesGlobal';

import {
  loadAllRequest,
  answerRequest,
} from '~/store/modules/helpOrder/actions';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 400,
    minWidth: 400,
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
  const dispatch = useDispatch();
  const helpOrders = useSelector(state => state.helpOrder.helpOrders);
  const closeModalValue = useSelector(state => state.helpOrder.closeModal);
  const [helpOrder, setHelpOrder] = useState({});

  const [modalIsOpen, setIsOpen] = useState(false);
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    dispatch(loadAllRequest());
  }, [dispatch]);

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (closeModalValue) {
      closeModal();
      dispatch(loadAllRequest());
    }
  }, [closeModalValue, dispatch]);

  const helpOrdersCount = useMemo(() => {
    return helpOrders.length;
  }, [helpOrders.length]);

  function openModal(ho) {
    setHelpOrder(ho);
    setIsOpen(true);
  }

  function handleAnswer(id) {
    if (answer.length === 0) {
      console.tron.log(answer);
      toast.error('Resposta entá vazia');
    } else {
      dispatch(answerRequest(id, answer));
    }
  }

  return (
    <>
      <Container>
        <Content>
          <HeaderLabel>Pedidos de Auxílio</HeaderLabel>
          {helpOrdersCount > 0 ? (
            <Table>
              <thead>
                <tr>
                  <th>ALUNO</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {helpOrders.map(ho => (
                  <tr key={ho.id}>
                    <td>
                      <strong>{ho.student.name}</strong>
                    </td>
                    <td>
                      <BlueButton onClick={() => openModal(ho)}>
                        responder
                      </BlueButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <EmptyList>Não existem Pedios de Auxílio pendentes</EmptyList>
          )}
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

            <ModalAnswer>{helpOrder.question}</ModalAnswer>

            <ModalTitle>
              <strong>SUA RESPOSTA</strong>
            </ModalTitle>

            <ModalInput
              maxLength={255}
              onChange={e => setAnswer(e.target.value)}
              placeholder="Sua resposta"
            />

            <ModalButton onClick={() => handleAnswer(helpOrder.id)}>
              Responder Aluno
            </ModalButton>
          </Modal>
        </ContainerModal>
      )}
    </>
  );
}

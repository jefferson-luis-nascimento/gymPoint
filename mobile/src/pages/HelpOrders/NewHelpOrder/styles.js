import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 60px;
  padding: 20px 20px 0;
`;

export const QuestionInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
  multiline: true,
  textAlignVertical: 'top',
})`
  padding: 20px;
  font-size: 16px;
  border: 1px solid #999;
  border-radius: 4px;
  margin-bottom: 20px;
  flex: 1;
  justify-content: flex-start;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
  margin-bottom: 100px;
`;

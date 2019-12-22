import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Logo = styled.Image``;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  padding: 0 15px;
  height: 46px;
  border: 1px solid #999;
  border-radius: 4px;
  font-size: 15px;
  margin-bottom: 10px;
  color: #333;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
`;

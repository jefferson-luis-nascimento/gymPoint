import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background: #eceef3;
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px 10px;
  flex-direction: column;
`;

export const NewHelpOrderButton = styled(Button)`
  margin-bottom: 20px;
  padding: 0 20px;
`;

export const HelpOrdersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const HelpOrderHeader = styled.View`
  height: 36px;
  padding: 5px;
  flex-direction: row;
  justify-content: space-between;
`;
export const HelpOrderLeft = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;

export const HelpOrderLeftText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${props => (props.withoutAnswer ? '#999' : '#42cb59')};
`;

export const HelpOrderRightText = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const HelpOrderQuestion = styled.Text`
  line-height: 26px;
  font-size: 14px;
  color: #666;
`;

export const EmptyList = styled.Text`
  font-size: 18px;
  color: #333;
  border: 1px solid #999;
  border-radius: 4px;
  background: #fff;
  padding: 20px;
`;

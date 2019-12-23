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
  align-self: stretch;
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

export const HelpOrderButton = styled.TouchableOpacity`
  padding: 10px;
  margin-bottom: 10px;
  height: 160px;
  min-height: 160px;
  max-height: 160px;
  background: #fff;
  border: 1px solid #999;
  border-radius: 4px;
`;

export const HelpOrderHeader = styled.View`
  height: 36px;
  padding: 5px;
  flex-direction: row;
  justify-content: space-between;
`;
export const HelpOrderLeft = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const HelpOrderLeftText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${props => (props.withoutAnswer ? '#999' : '#42cb59')};
  padding-left: 5px;
`;

export const HelpOrderRightText = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const HelpOrderQuestion = styled.Text.attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 4,
})`
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

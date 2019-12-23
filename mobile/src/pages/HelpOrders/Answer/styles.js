import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #eceef3;
  margin-top: 60px;
`;

export const Content = styled.View`
  background: #fff;
  border: 1px solid #999;
  border-radius: 4px;
  margin: 20px;
  flex: 1;
  padding: 15px;
`;

export const HelpOrderHeader = styled.View`
  height: 36px;
  flex-direction: row;
  justify-content: space-between;
`;

export const HelpOrderLeftText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #444;
`;

export const HelpOrderRightText = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const HelpOrderText = styled.Text.attrs({
  ellipsizeMode: 'tail',
})`
  line-height: 26px;
  font-size: 14px;
  color: #666;
  margin: 20px 0;
`;

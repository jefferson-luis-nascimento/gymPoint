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

export const NewCheckinButton = styled(Button)`
  margin-bottom: 20px;
  padding: 0 20px;
`;

export const CheckinsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const Checkin = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
  border: 1px solid #666;
  border-radius: 4px;
  background: #fff;
  height: 46px;
  padding: 10px;
  width: 100%;
`;

export const Left = styled.Text`
  font-size: 14px;
  color: #444;
  font-weight: bold;
`;

export const Right = styled.Text`
  font-size: 14px;
  color: #666;
`;

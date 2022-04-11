import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
   flex: 1;
`;

export const Header = styled.View`
   width: 100%;
   height: 120px;
   background-color: ${({ theme }) => theme.colors.background};
`;

export const UserContainer = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.placeholder};
`;

export const UserAvatar = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  align-self: center;
  margin-top: -80px;
`;

export const UserName = styled.Text`
   font-size: ${RFValue(24)}px;
   align-self: center;
   margin-top: 20px;
   color: ${({ theme }) => theme.colors.white};
`;

export const UserContent = styled.View`
   padding-left: 12px;
   padding-right: 12px;
   margin-top: 20px;
`;

export const Info = styled.Text`
   margin-bottom: 10px;
   font-size: ${RFValue(18)}px;
   color: ${({ theme }) => theme.colors.Text_detail};
`;

export const InfoContent = styled.Text`
   color: ${({ theme }) => theme.colors.white};
`;

export const UserWrapper = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   margin-top: 8px;
`;

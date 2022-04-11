import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
   width: 100%;
   min-height: 150px;
   background-color: ${({ theme }) => theme.colors.shape};
   border-radius: 8px;
   margin-bottom: 10px;
`;

export const Content = styled.View`
   flex-direction: row;
   align-items: center;
   padding: 10px;
   justify-content: center;
   margin-top: 10px;
`;

export const Avatar = styled.Image`
   width: 100px;
   height: 100px;
   border-radius: 50px;
`;

export const UserInfo = styled.View`
   margin-left: 30px;
`;

export const UserName = styled.Text`
   font-size: ${RFValue(20)}px;
   font-family: ${({ theme }) => theme.fonts.medium};
   color: ${({ theme }) => theme.colors.primary};
   max-width: 200px;
`;

export const UserCountry = styled.Text`
   color: ${({ theme }) => theme.colors.placeholder};
   font-size: ${RFValue(14)}px;
   max-width: 200px;
`;

export const UserPhone = styled.Text`
   color: ${({ theme }) => theme.colors.placeholder};
   font-size: ${RFValue(14)}px;
`;

export const ContentWrapper = styled.View`
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`;

export const UserGender = styled.Text`
   color: ${({ theme }) => theme.colors.placeholder};
   font-size: ${RFValue(15)}px;
`;

export const UserDateBirth = styled.Text`
   color: ${({ theme }) => theme.colors.placeholder};
   font-size: ${RFValue(15)}px;
`;

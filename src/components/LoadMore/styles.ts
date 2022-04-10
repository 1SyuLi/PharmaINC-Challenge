import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
   width: 100%;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   margin-top: 8px;
`;

export const LoadIcon = styled(Feather)`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const LoadMoreText = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.primary};
    margin-left: 12px;
`;
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
    width: 300px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.shape};
    align-self: center;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.primary};
`;
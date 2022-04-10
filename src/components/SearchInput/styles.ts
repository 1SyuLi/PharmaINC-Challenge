import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
   width: 300px;
   border: 2px solid ${({ theme }) => theme.colors.secondary};
   border-radius: 5px;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;

export const TextInput = styled.TextInput`
   width: 80%;
   align-items: center;
   height: 40px;
   font-size: 20px;
   padding: 0px 12px;
   color: ${({ theme }) => theme.colors.placeholder};
`;

export const InputIcon = styled(Feather)`
   font-size: 20px;
   color: ${({ theme }) => theme.colors.placeholder};
   margin-right: 20px;
`;
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { SearchInput } from '../../components/SearchInput';

import {
   Container,
   Header,
   Title,
   Detail,
   InputWrapper,
   FilterIcon,
} from './styles';

export function Home() {

   const theme = useTheme();

   return (
      <Container>
         <StatusBar barStyle='dark-content' backgroundColor={theme.colors.background} />

         <Header>
            <Title>Pharm <Detail>INC</Detail></Title>

            <InputWrapper>
               <SearchInput />
               <FilterIcon name='filter' />
            </InputWrapper>
         </Header>
      </Container>
   );
}
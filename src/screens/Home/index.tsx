import React from 'react';
import { FlatList } from 'react-native';

import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';


import { SearchInput } from '../../components/SearchInput';
import { UserCard } from '../../components/UserCard';

import {
   Container,
   Header,
   Title,
   Detail,
   InputWrapper,
   FilterIcon,
   CardWrapper,
} from './styles';

export function Home() {

   const theme = useTheme();

   const user = [
      {
         id: '1',
         photoUrl: 'https://github.com/1syuli.png',
         name: 'Ruan Pablo',
         email: 'ruangoio01@gmail.com',
         phone: '+55 (11) 99999-9999',
         gender: 'man',
         dateBirth: '18/08/2004'
      },
      {
         id: '2',
         photoUrl: 'https://randomuser.me/api/portraits/women/23.jpg',
         name: 'Terra Terry',
         email: 'terra.terry@example.com',
         phone: '+55 (11) 99999-9999',
         gender: 'woman',
         dateBirth: '12/03/1951'
      },
   ]

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

         <CardWrapper>
            <FlatList
               data={user}
               keyExtractor={item => item.id}
               renderItem={({ item }) => <UserCard user={item} />}
               showsVerticalScrollIndicator={false}
            />


         </CardWrapper>
      </Container>
   );
}
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView } from 'react-native';

import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import { SearchInput } from '../../components/SearchInput';
import { UserCard } from '../../components/UserCard';
import { LoadMore } from '../../components/LoadMore';

import { api } from '../../services/api';

import {
   Container,
   Header,
   Title,
   Detail,
   InputWrapper,
   FilterIcon,
   CardWrapper,
} from './styles';

type UserProps = {
   id: string,
   email: string,
   gender: string,
   phone: string,
   name: string,
   userPhoto: string,
   dateBirth: string,
}

export function Home() {

   const theme = useTheme();

   const [users, setUsers] = useState<UserProps[]>([]);
   const [defaultUsers, setDefaultUsers] = useState(true);

   async function loadUsers() {
      await api.get('/?results=2').then(response => {

         const apiData = response.data.results;


         apiData.map(user => {
            const userFormatted: UserProps = {
               id: user.login.uuid,
               email: user.email,
               gender: user.gender,
               phone: user.phone,
               name: user.name.first,
               userPhoto: user.picture.large,
               dateBirth: '00/00/2000',
            }

            setUsers((oldUsers: any) => [...oldUsers, userFormatted]);
         });
      }).catch(err => {
         console.log(err);
      })
   }


   useEffect(() => {
      async function loadDefaultUsers() {
         if (defaultUsers) {
            loadUsers();
            setDefaultUsers(false);
         }
      }
      loadDefaultUsers();
   }, [])

   return (
      <Container>
         <StatusBar barStyle='dark-content' backgroundColor={theme.colors.background} />

         <Header>
            <Title>Pharma <Detail>INC</Detail></Title>

            <InputWrapper>
               <SearchInput />
               <FilterIcon name='filter' />
            </InputWrapper>
         </Header>

         <ScrollView>
            <CardWrapper>
               {users.map(user => <UserCard key={user.id} user={user} />)}

               <LoadMore onPress={loadUsers} />
            </CardWrapper>
         </ScrollView>


      </Container>
   );
}
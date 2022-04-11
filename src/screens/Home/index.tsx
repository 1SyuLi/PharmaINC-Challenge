import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, ActivityIndicator } from 'react-native';

import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import { SearchInput } from '../../components/SearchInput';
import { UserCard } from '../../components/UserCard';
import { LoadMore } from '../../components/LoadMore';

import { api } from '../../services/api';
import { format, parseISO } from 'date-fns';

import {
   Container,
   Header,
   Title,
   Detail,
   InputWrapper,
   FilterIcon,
   CardWrapper,
} from './styles';
import { useNavigation } from '@react-navigation/native';

export type UserProps = {
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
   const navigation = useNavigation<any>();

   const [users, setUsers] = useState<UserProps[]>([]);
   const [defaultUsers, setDefaultUsers] = useState(true);
   const [loading, setLoading] = useState(false);

   async function loadUsers() {
      setLoading(true);
      await api.get('/?results=2').then(response => {

         const apiData = response.data.results;

         apiData.map(user => {

            const FormattedDate = format(parseISO(user.dob.date), 'MM-dd-yyyy');

            const userFormatted: UserProps = {
               id: user.login.uuid,
               email: user.email,
               gender: user.gender,
               phone: user.phone,
               name: user.name.first,
               userPhoto: user.picture.large,
               dateBirth: FormattedDate,
            }

            setUsers((oldUsers: any) => [...oldUsers, userFormatted]);
         });

         setLoading(false);
      }).catch(err => {
         console.log(err);
      })
   }

   function handleUserInfo(user: UserProps) {
      navigation.navigate('User', { user });
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
               {users.map(user => <UserCard onPress={() => handleUserInfo(user)} key={user.id} user={user} />)}

               {
                  !loading ?
                     <LoadMore onPress={loadUsers} />
                     : <ActivityIndicator animating={true} size="large" color={theme.colors.logoDetail} />
               }

            </CardWrapper>
         </ScrollView>
      </Container>
   );
}
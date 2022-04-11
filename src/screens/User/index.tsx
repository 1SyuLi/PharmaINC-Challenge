import React from 'react';
import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import {
    Container,
    Header,
    UserContainer,
    UserAvatar,
    UserContent,
    Info,
    InfoContent,
    UserName,
    UserWrapper,
} from './styles';

import { UserProps } from '../Home';

export function User() {

    const theme = useTheme();
    const route = useRoute();
    const { user } = route.params as any;
    const userType: UserProps = user;

    return (
        <Container>
            <StatusBar barStyle='dark-content' backgroundColor={theme.colors.background} />
            <Header />

            <UserContainer>
                <UserAvatar source={{ uri: userType.userPhoto }} />
                <UserName>{userType.name}</UserName>
                <UserContent>
                    <Info>Email: <InfoContent>{userType.email}</InfoContent></Info>
                    <Info>Phone: <InfoContent>{userType.phone}</InfoContent></Info>
                    <Info>Address: <InfoContent>rua 0</InfoContent></Info>

                    <UserWrapper>
                        <Info>{userType.gender}</Info>
                        <Info>{userType.dateBirth}</Info>
                    </UserWrapper>
                </UserContent>
            </UserContainer>
        </Container>
    );
}
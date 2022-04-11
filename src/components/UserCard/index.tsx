import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    Content,
    Avatar,
    UserInfo,
    UserName,
    UserCountry,
    UserPhone,
    ContentWrapper,
    UserGender,
    UserDateBirth,
} from './styles';

interface UserProps extends TouchableOpacityProps {
    user: {
        id: string,
        email: string,
        gender: string,
        phone: string,
        name: string,
        userPhoto: string,
        dateBirth: string,
        country: string,
        address: string,
        username: string,
    }
}

export function UserCard({ user, ...rest }: UserProps) {
    return (
        <Container {...rest}>
            <Content>
                <Avatar source={{ uri: user.userPhoto }} />
                <UserInfo>
                    <UserName>{user.name}</UserName>
                    <UserCountry>{user.country}</UserCountry>
                    <UserPhone>{user.phone}</UserPhone>

                    <ContentWrapper>
                        <UserGender>{user.gender}</UserGender>
                        <UserDateBirth>{user.dateBirth}</UserDateBirth>
                    </ContentWrapper>
                </UserInfo>
            </Content>
        </Container>
    );
}
import React from 'react';

import {
    Container,
    Content,
    Avatar,
    UserInfo,
    UserName,
    UserEmail,
    UserPhone,
    ContentWrapper,
    UserGender,
    UserDateBirth,
} from './styles';

interface UserProps {
    user: {
        id: string;
        userPhoto: string;
        phone: string;
        name: string;
        email: string;
        gender: string;
        dateBirth: string;
    }
}

export function UserCard({ user }: UserProps) {
    return (
        <Container>
            <Content>
                <Avatar source={{ uri: user.userPhoto }} />
                <UserInfo>
                    <UserName>{user.name}</UserName>
                    <UserEmail>{user.email}</UserEmail>
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
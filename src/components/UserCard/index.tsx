import React from 'react';
import { TouchableOpacityProps } from 'react-native';

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

interface UserProps extends TouchableOpacityProps {
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

export function UserCard({ user, ...rest }: UserProps) {
    return (
        <Container {...rest}>
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
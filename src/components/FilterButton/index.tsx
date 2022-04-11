import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    Container, Title
} from './styles';

interface FilterButtonProps extends TouchableOpacityProps {
    title: string,
}

export function FilterButton({ title, ...rest }: FilterButtonProps) {
    return (
        <Container {...rest}>
            <Title>{title}</Title>
        </Container>
    );
}
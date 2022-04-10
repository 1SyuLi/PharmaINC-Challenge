import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
    Container,
    TextInput,
    InputIcon,
} from './styles';

export function SearchInput() {

    const theme = useTheme();

    return (
        <Container>
            <TextInput
                placeholder='Searching'
                placeholderTextColor={theme.colors.placeholder}
                autoCapitalize='none'
                autoCorrect={false}
            />

            <InputIcon name='search' />
        </Container>
    );
}
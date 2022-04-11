import React from 'react';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';

import {
    Container,
    TextInput,
    InputIcon,
} from './styles';

interface InputProps extends TextInputProps { };

export function SearchInput({ ...rest }: InputProps) {

    const theme = useTheme();

    return (
        <Container>
            <TextInput
                {...rest}
                placeholder='Searching'
                placeholderTextColor={theme.colors.placeholder}
                autoCapitalize='none'
                autoCorrect={false}
            />

            <InputIcon name='search' />
        </Container>
    );
}
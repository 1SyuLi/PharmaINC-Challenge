import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    LoadIcon,
    LoadMoreText,
} from './styles';

interface LoadMoreProps extends TouchableOpacityProps { }

export function LoadMore({ ...rest }: LoadMoreProps) {
    return (
        <Container {...rest}>
            <LoadIcon name="rotate-cw" />
            <LoadMoreText>Load More</LoadMoreText>
        </Container>
    );
}
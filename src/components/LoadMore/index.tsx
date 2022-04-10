import React from 'react';

import {
    Container,
    LoadIcon,
    LoadMoreText,
} from './styles';

export function LoadMore() {
    return (
        <Container>
            <LoadIcon name="rotate-cw" />
            <LoadMoreText>Loading More...</LoadMoreText>
        </Container>
    );
}
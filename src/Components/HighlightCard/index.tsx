import React from 'react';

import { 
    Container,
    Header,
    Title,
    Footer,
    Amount,
    LastTransition,
    Icon
 } from './style';

export function HighlightCard(){
    return (
        <Container>
            <Header>
                <Title>Entrada</Title>
                <Icon name="arrow-up-circle" />

            </Header>
            <Footer>
                <Amount>R$ 17.500,00</Amount>
                <LastTransition>Ultima entrada 13 de abril</LastTransition>
            </Footer>
        </Container>
    )
}
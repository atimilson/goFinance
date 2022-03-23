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


 interface Props{
     title: string;
     amount: string;
     lastTransition: string;
     type: 'up' | 'down' | 'total'
 }

 const icons = {
     up : 'arrow-up-circle',
     down : 'arrow-down-circle',
     total : 'dollar-sign'
 }

export function HighlightCard({ type, title, amount, lastTransition}: Props) {
    return (
        <Container>
            <Header>
                <Title>{title}</Title>
                <Icon name={icons[type]} type={type}/>

            </Header>
            <Footer>
                <Amount>{amount}</Amount>
                <LastTransition>{lastTransition}</LastTransition>
            </Footer>
        </Container>
    )
}
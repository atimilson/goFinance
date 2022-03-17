import React from 'react';
import {Container, 
        Header,
        UserInfo,
        User,
        Photo,
        UserGreeting,
        UserName,
        UserWrapper,
        Icon
    } from './styles';

export function Dashboard(){
    return (
        <Container >
            <Header>
              <UserWrapper>
              
                    <UserInfo>
                        <Photo  source={{ uri : 'https://avatars.githubusercontent.com/u/40214696?v=4' }}/>
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Atimilson</UserName>
                        </User>
                    </UserInfo>
                    
                    <Icon name="power" />
              </UserWrapper>
            </Header>
        </Container>
    )
}
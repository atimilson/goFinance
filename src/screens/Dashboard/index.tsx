import React from 'react';
import { HighlightCard } from '../../Components/HighlightCard';
import { TransactionCard, TransactionCardProps} from '../../Components/TransactionCard';
import {Container, 
        Header,
        UserInfo,
        User,
        Photo,
        UserGreeting,
        UserName,
        UserWrapper,
        Icon,
        HighlightCards,
        Transactions,
        Title,
        TransactionsList
    } from './styles';

export interface DataListProps extends TransactionCardProps{
   id :  string;
}    

export function Dashboard(){
    const data: DataListProps[] = [{
        id : '1',
        type: 'positivo',
        titulo:"Desenvolvimento de site",
        amount : "R$ 12.000,00",
        category:{
                 name: "Vendas",
                 icon: "dollar-sign",
        },
        date:"13/04/2020"
    },{
        id : '2',
        type: 'negativo',
        titulo:"Hamburgueria Pizzy",
        amount : "R$ 59,00",
        category:{
                 name: "Alimentação",
                 icon: "coffee",
        },
        date:"11/04/2020"
    },{
        id : '3',
        type: 'negativo',
        titulo:"Aluguel Ap",
        amount : "R$ 1.200,00",
        category:{
                 name: "Casa",
                 icon: "shopping-bag",
        },
        date:"10/04/2020"
    },{
        id : '4',
        type: 'positivo',
        titulo:"Bonus ",
        amount : "R$ 1.000,00",
        category:{
                 name: "Vendas",
                 icon: "dollar-sign",
        },
        date:"09/04/2020"
    }];

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
            <HighlightCards>
                <HighlightCard 
                   type="up"
                   title="Entradas" 
                   amount = "R$ 17.400,00"  
                   lastTransition="Última entrada 13 de abril"
                />
                <HighlightCard
                   type="down" 
                   title="Saidas" 
                   amount = "R$ 1.400,00"  
                   lastTransition="Última entrada 13 de abril"
                />
                <HighlightCard
                   type="total" 
                   title="Total" 
                   amount = "R$ 16.000,00"  
                   lastTransition="Última entrada 13 de abril"
                />
            </HighlightCards>

            <Transactions>
                <Title>Listagens</Title>

                <TransactionsList  
                  data ={data}                
                  keyExtractor={item => item.id}                  
                  renderItem={({item})=>  <TransactionCard data={item} /> }                  
                />
            </Transactions>
        </Container>
    )
}
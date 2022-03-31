import React, {useState} from "react";
import { Container, Header, Title , Form , Fields, TransactionsTypes } from "./style";

import { Input } from "../../Components/Forms/Input";
import { Button } from "../../Components/Forms/Button";
import { TransactionButton } from "../../Components/Forms/TransactionButton";

export function Register(){
    const [transactionType, setTransactionType] = useState('');

    function handleTransactionSelect(type : 'up'|'down'){
      setTransactionType(type);   
      console.log(transactionType);
    }
    return(
      <Container >
          <Header>
              <Title>Cadastro</Title>
          </Header>
          <Form>
            <Fields>  
                <Input
                placeholder="Nome"
                />
                <Input
                placeholder="Preço"
                />
                <TransactionsTypes>
                  <TransactionButton 
                    title="Income" 
                    type="up" 
                    onPress={()=>handleTransactionSelect('up')}
                    isActive={transactionType === 'up'}
                  />
                  <TransactionButton 
                    title="Income" 
                    type="down"
                    onPress={()=>handleTransactionSelect('down')}
                    isActive={transactionType === 'down'}
                  />
                </TransactionsTypes>
            </Fields>
            <Button title="Cadastro"/>
          </Form>
      </Container>
    );
}
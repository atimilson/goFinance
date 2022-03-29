import React from "react";
import { Container, Header, Title , Form , Fields } from "./style";

import { Input } from "../../Components/Forms/Input";
import { Button } from "../../Components/Forms/Button";

export function Register(){
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
            </Fields>
            <Button title="Cadastro"/>
          </Form>
      </Container>
    );
}
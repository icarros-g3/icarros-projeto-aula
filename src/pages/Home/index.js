import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { Container, FormWrapper, StyledForm, FormGroup } from './style';

import { api } from '@/service/api';

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const cadastroSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    api
      .post('', data)
      .then((res) => {
        toast('Cadastro realizado com sucesso.', {
          type: 'success',
          onClose: () => {
            setData((prevState) => {
              Array.from(document.querySelectorAll('input')).forEach((input) => (input.value = ''));
              return { ...prevState, nome: '', email: '', senha: '' };
            });
          },
        });
      })
      .catch((err) => {
        toast('Ooops, ocorreu um erro.', {
          type: 'error',
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Container>
        <FormWrapper>
          <h1>CADASTRO DE USUÁRIO</h1>
          <StyledForm onSubmit={cadastroSubmit}>
            <FormGroup>
              <label htmlFor="">Nome</label>
              <input type="text" onChange={(e) => setData({ ...data, nome: e.target.value })} />
            </FormGroup>

            <FormGroup>
              <label htmlFor="">E-mail</label>
              <input type="text" onChange={(e) => setData({ ...data, email: e.target.value })} />
            </FormGroup>

            <FormGroup>
              <label htmlFor="">Senha</label>
              <input type="password" onChange={(e) => setData({ ...data, senha: e.target.value })} />
            </FormGroup>

            <FormGroup>
              <button disabled={isLoading}>{isLoading ? 'Carregando...' : 'Enviar'}</button>
            </FormGroup>
          </StyledForm>
        </FormWrapper>
      </Container>
    </>
  );
};

export default Home;

import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { Container, StyledForm, FormGroup } from './style';

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
        console.warn(res);
        toast('Cadastro realizado com sucesso.', {
          type: 'success',
          onClose: () => {
            setData((prevState) => {
              console.warn(prevState);
              Array.from(document.querySelectorAll('input')).forEach((input) => (input.value = ''));
              const data = { nome: '', email: '', senha: '' };
              return { ...prevState, ...data };
            });
          },
        });
      })
      .catch((err) => {
        console.error(err);
        toast('Ooops, ocorreu um erro.', {
          type: 'error',
        });
      })
      .finally(() => {
        setIsLoading(false);
      });

    console.log(e);
    console.log(data);
  };

  return (
    <>
      <Container>
        <h1>CADASTRO</h1>
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
            <button>{isLoading ? 'Carregando...' : 'Enviar'}</button>
          </FormGroup>
        </StyledForm>
      </Container>
    </>
  );
};

export default Home;

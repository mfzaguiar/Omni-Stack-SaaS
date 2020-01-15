import React, { useState } from 'react';
import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import Button from '~/styles/components/Button';
import { Container, SignForm, Label, StyledLink } from '../styles';

import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required('Email é obrigatório'),
    password: Yup.string().required('Senha é obrigatória'),
  });

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <SignForm schema={validationSchema} onSubmit={handleSubmit}>
        <h1>Seja bem vindo</h1>

        <Label>E-MAIL</Label>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Label>SENHA</Label>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Button size="big" type="submit">
          Entrar
        </Button>
        <StyledLink to="/register">Criar conta</StyledLink>
      </SignForm>
    </Container>
  );
}

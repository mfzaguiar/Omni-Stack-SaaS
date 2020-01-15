import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import Button from '~/styles/components/Button';
import { Container, SignForm, Label, StyledLink } from '../styles';

import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignUp() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string()
      .email()
      .required('Email é obrigatório'),
    password: Yup.string().required('Senha é obrigatória'),
  });

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Container>
      <SignForm schema={validationSchema} onSubmit={e => handleSubmit(e)}>
        <h1>É um novo membro ?</h1>
        <Label>Nome</Label>
        <Input
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

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
          Registrar
        </Button>

        <StyledLink to="/">Já tenho login</StyledLink>
      </SignForm>
    </Container>
  );
}

import { Form } from '@rocketseat/unform';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  flex: 1;
  height: 100%;
  background: #202225;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.p`
  color: #b9bbbe;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  margin-top: 15px;
`;

export const SignForm = styled(Form)`
  background: #36393f;
  border-radius: 5px;
  box-shadow: 1px 2px 8px 0 ${lighten(0.09, '#7289da')};
  padding: 20px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  h1 {
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    margin: 0 0 10px;
  }

  span {
    color: ${lighten(0.09, 'red')};
    font-size: 12px;
    line-height: 16px;
    font-weight: bold;
    margin-top: 15px;
    align-self: flex-start;
  }

  input {
    height: 40px;
    padding: 10px;
    border-radius: 3px;
    margin-top: 8px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: rgba(0, 0, 0, 0.1);
    transition: border 0.15s ease;
    color: #f6f6f6;
    font-size: 16px;

    &:focus {
      border-color: #7289da;
    }
  }

  button {
    margin: 20px 0 0;
  }
`;

export const StyledLink = styled(Link)`
  color: #fff;
  align-self: center;
  margin-top: 20px;

  &:hover {
    color: ${darken(0.3, '#fff')};
  }
`;

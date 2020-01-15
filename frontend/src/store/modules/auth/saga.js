import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure, getPermissionsSuccess } from './actions';
import { clearState } from '~/store/modules/teams/actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token } = response.data;

    // localStorage.setItem('@Omni:token', token);

    api.defaults.headers.Authorization = `Barer ${token}`;

    yield put(signInSuccess(token));

    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na atutenticação, verifique seus dados');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    toast.success('Cadastrado com sucesso.');
    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, você foi convidado ?');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Barer ${token}`;
  }
}

export function* signOut() {
  localStorage.removeItem('@Omni:team');
  yield put(clearState());
  history.push('/');
}

export function* getPermissions() {
  const team = yield select(state => state.teams.active);
  const signedIn = yield select(state => state.auth.signed);

  if (!signedIn || !team) {
    return;
  }

  const response = yield call(api.get, 'permissions');
  const { roles, permissions } = response.data;

  yield put(getPermissionsSuccess(roles, permissions));
}

export default all([
  // takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);

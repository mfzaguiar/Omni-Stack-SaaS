import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';

import { getMembersSuccess } from './actions';

export function* getMembers() {
  const response = yield call(api.get, 'members');
  yield put(getMembersSuccess(response.data));
}

export function* updateMemberRequest({ member }) {
  try {
    yield call(api.put, `members/${member.id}`, {
      roles: member.roles.map(roles => roles.id),
    });
    toast.success('Membro atualizado com sucesso.');
  } catch (err) {
    toast.error('Houve um erro, tente novamente');
  }
}

export function* inviteMember({ email }) {
  try {
    yield call(api.post, 'invites', { invites: [email] });
    toast.success('Enviamos um convite ao usuário para participar do time.');
  } catch (err) {
    toast.error('Houve um erro, tente novamente');
  }
}

export default all([
  takeLatest('@members/GET_MEMBERS_REQUEST', getMembers),
  takeLatest('@members/UPDATE_MEMBERS_REQUEST', updateMemberRequest),
  takeLatest('@members/INVITE_MEMBERS_REQUEST', inviteMember),
]);

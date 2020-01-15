import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';

import { getPermissions } from '~/store/modules/auth/saga';
import { getTeamSuccess, createTeamSuccess, closeTeamModal } from './actions';
import { getProjectsRequest } from '~/store/modules/projects/actions';

export function* getTeams() {
  const response = yield call(api.get, 'teams');
  yield put(getTeamSuccess(response.data));
}

export function* createTeam({ name }) {
  try {
    const response = yield call(api.post, 'teams', { name });

    yield put(createTeamSuccess(response.data));
    yield put(closeTeamModal());
  } catch (err) {
    toast.error('Houve um erro, tente novamente');
  }
}

export function* getProjects() {
  yield put(getProjectsRequest());
}

export default all([
  takeLatest('@teams/GET_TEAM_REQUEST', getTeams),
  takeLatest('@teams/GET_TEAM_REQUEST', getPermissions),
  takeLatest('@teams/CREATE_TEAM_REQUEST', createTeam),
  takeLatest('@teams/SELECT_TEAM', getProjects),
  takeLatest('@teams/SELECT_TEAM', getPermissions),
]);

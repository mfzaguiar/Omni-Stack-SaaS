import { all, fork } from 'redux-saga/effects';

import { getPermissions } from '~/store/modules/auth/saga';

import auth from './auth/saga';
import teams from './teams/saga';
import projects from './projects/saga';
import members from './members/saga';

export default function* rootSaga() {
  return yield all([fork(getPermissions), auth, teams, projects, members]);
}

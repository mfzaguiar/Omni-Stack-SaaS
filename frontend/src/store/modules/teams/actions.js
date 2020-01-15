export function getTeamRequest() {
  return {
    type: '@teams/GET_TEAM_REQUEST',
  };
}

export function getTeamSuccess(data) {
  return {
    type: '@teams/GET_TEAM_SUCCESS',
    data,
  };
}

export function selectTeam(team) {
  return {
    type: '@teams/SELECT_TEAM',
    team,
  };
}

export function openTeamModal() {
  return {
    type: '@teams/OPEN_TEAM_MODAL',
  };
}

export function closeTeamModal() {
  return {
    type: '@teams/CLOSE_TEAM_MODAL',
  };
}

export function createTeamRequest(name) {
  return {
    type: '@teams/CREATE_TEAM_REQUEST',
    name,
  };
}

export function createTeamSuccess(newTeam) {
  return {
    type: '@teams/CREATE_TEAM_SUCCESS',
    newTeam,
  };
}

export function clearState() {
  return {
    type: '@teams/CLEAR_STATE',
  };
}

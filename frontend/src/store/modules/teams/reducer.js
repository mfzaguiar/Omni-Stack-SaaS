import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  teamModalOpen: false,
  active: JSON.parse(localStorage.getItem('@Omni:team')) || null,
};

export default function teams(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@teams/GET_TEAM_REQUEST': {
        break;
      }
      case '@teams/GET_TEAM_SUCCESS': {
        draft.data.push(...action.data);
        break;
      }
      case '@teams/SELECT_TEAM': {
        draft.active = action.team;
        localStorage.setItem('@Omni:team', JSON.stringify(action.team));
        break;
      }
      case '@teams/OPEN_TEAM_MODAL': {
        draft.teamModalOpen = true;
        break;
      }
      case '@teams/CLOSE_TEAM_MODAL': {
        draft.teamModalOpen = false;
        break;
      }
      case '@teams/CREATE_TEAM_REQUEST': {
        break;
      }
      case '@teams/CREATE_TEAM_SUCCESS': {
        draft.data.push(action.newTeam);
        break;
      }
      case '@teams/CLEAR_STATE': {
        draft.data = [];
        draft.teamModalOpen = false;
        draft.active = null;
        break;
      }

      default:
    }
  });
}

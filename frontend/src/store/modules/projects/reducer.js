import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  projectModalOpen: false,
};

export default function projects(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@projects/GET_PROJECTS_REQUEST': {
        break;
      }
      case '@projects/GET_PROJECTS_SUCCESS': {
        draft.data = action.data;
        break;
      }
      case '@projects/OPEN_PROJECTS_MODAL': {
        draft.projectModalOpen = true;
        break;
      }
      case '@projects/CLOSE_PROJECTS_MODAL': {
        draft.projectModalOpen = false;
        break;
      }
      case '@projects/CREATE_PROJECT_REQUEST': {
        break;
      }
      case '@projects/CREATE_PROJECT_SUCCESS': {
        draft.data.push(action.project);
        break;
      }

      default:
    }
  });
}

import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  memberModalOpen: false,
};

export default function members(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@members/OPEN_MEMBERS_MODAL': {
        draft.memberModalOpen = true;
        break;
      }
      case '@members/CLOSE_MEMBERS_MODAL': {
        draft.memberModalOpen = false;
        break;
      }
      case '@members/GET_MEMBERS_REQUEST': {
        break;
      }
      case '@members/GET_MEMBERS_SUCCESS': {
        draft.data = action.members;
        break;
      }
      case '@members/UPDATE_MEMBERS_REQUEST': {
        const { id, roles } = action.member;
        draft.data = state.data.map(member =>
          member.id === id ? { ...member, roles } : member
        );
        break;
      }
      case '@members/INVITE_MEMBERS_REQUEST': {
        break;
      }

      default:
    }
  });
}

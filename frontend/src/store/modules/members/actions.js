export function openMembersModal() {
  return {
    type: '@members/OPEN_MEMBERS_MODAL',
  };
}

export function closeMembersModal() {
  return {
    type: '@members/CLOSE_MEMBERS_MODAL',
  };
}

export function getMembersRequest() {
  return {
    type: '@members/GET_MEMBERS_REQUEST',
  };
}

export function getMembersSuccess(members) {
  return {
    type: '@members/GET_MEMBERS_SUCCESS',
    members,
  };
}

export function updateMembersRequest(id, roles) {
  return {
    type: '@members/UPDATE_MEMBERS_REQUEST',
    member: { id, roles },
  };
}

export function inviteMemberRequest(email) {
  return {
    type: '@members/INVITE_MEMBERS_REQUEST',
    email,
  };
}

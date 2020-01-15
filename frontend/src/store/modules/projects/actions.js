export function getProjectsRequest() {
  return {
    type: '@projects/GET_PROJECTS_REQUEST',
  };
}

export function getProjectsSuccess(data) {
  return {
    type: '@projects/GET_PROJECTS_SUCCESS',
    data,
  };
}

export function openProjectModal() {
  return {
    type: '@projects/OPEN_PROJECTS_MODAL',
  };
}

export function closeProjectModal() {
  return {
    type: '@projects/CLOSE_PROJECTS_MODAL',
  };
}

export function createProjectRequest(title) {
  return {
    type: '@projects/CREATE_PROJECT_REQUEST',
    title,
  };
}

export function createProjectSuccess(project) {
  return {
    type: '@projects/CREATE_PROJECT_SUCCESS',
    project,
  };
}

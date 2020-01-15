import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Can from '~/components/Can';
import Modal from '~/components/Modal';
import Members from '~/components/Members';
import Button from '~/styles/components/Button';
import { Container, Project, Label } from './styles';

import {
  getProjectsRequest,
  openProjectModal,
  closeProjectModal,
  createProjectRequest,
} from '~/store/modules/projects/actions';
import { openMembersModal } from '~/store/modules/members/actions';

export default function Projects() {
  const dispatch = useDispatch();
  const activeTeam = useSelector(state => state.teams.active);
  const projects = useSelector(state => state.projects);
  const members = useSelector(state => state.members);

  const [projectName, setProjectName] = useState('');

  useEffect(() => {
    if (activeTeam) {
      dispatch(getProjectsRequest());
    }
  }, []);

  function handleCreateProject(e) {
    e.preventDefault();
    dispatch(createProjectRequest(projectName));
  }

  if (!activeTeam) return null;

  return (
    <Container>
      <header>
        <h1>{activeTeam.name}</h1>
        <div>
          <Can checkPermission="projects_create">
            <Button onClick={() => dispatch(openProjectModal())}>+ Novo</Button>
          </Can>
          <Button onClick={() => dispatch(openMembersModal())}>Membros</Button>
        </div>
      </header>

      {projects.data.map(project => (
        <Project key={project.id}>
          <p>{project.title}</p>
        </Project>
      ))}

      {projects.projectModalOpen && (
        <Modal>
          <h1>Criar Projeto</h1>

          <form onSubmit={e => handleCreateProject(e)}>
            <Label>Nome</Label>
            <input
              value={projectName}
              onChange={e => setProjectName(e.target.value)}
              name="newProject"
            />

            <Button size="big" type="submit">
              Salvar
            </Button>
            <Button
              size="small"
              color="gray"
              onClick={() => dispatch(closeProjectModal())}
            >
              Cancelar
            </Button>
          </form>
        </Modal>
      )}

      {members.memberModalOpen && <Members />}
    </Container>
  );
}

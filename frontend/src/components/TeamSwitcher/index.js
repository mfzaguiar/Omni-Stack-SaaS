import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getTeamRequest,
  selectTeam,
  openTeamModal,
  closeTeamModal,
  createTeamRequest,
} from '~/store/modules/teams/actions';

import { signOut } from '~/store/modules/auth/actions';

import { Container, TeamList, Team, NewTeam, Label, Logout } from './styles';
import Button from '~/styles/components/Button';
import Modal from '~/components/Modal';

export default function TeamSwitcher() {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.teams);

  const [newTeam, setNewTeam] = useState('');

  useEffect(() => {
    dispatch(getTeamRequest());
  }, []);

  function handleTeamSelect(team) {
    dispatch(selectTeam(team));
  }

  function handleCreateTeam(e) {
    e.preventDefault();
    dispatch(createTeamRequest(newTeam));
  }

  return (
    <Container>
      <TeamList>
        {teams.data.map(team => (
          <Team key={team.id} onClick={() => handleTeamSelect(team)}>
            <img
              alt={team.name}
              src={`https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${team.name}`}
            />
          </Team>
        ))}

        <NewTeam onClick={() => dispatch(openTeamModal())}>NOVO</NewTeam>

        {teams.teamModalOpen && (
          <Modal>
            <h1>Criar time</h1>

            <form onSubmit={e => handleCreateTeam(e)}>
              <Label>Nome</Label>
              <input
                name="newTeam"
                value={newTeam}
                onChange={e => setNewTeam(e.target.value)}
                type="text"
              />

              <Button size="big" type="submit">
                Salvar
              </Button>
              <Button
                size="small"
                color="gray"
                onClick={() => dispatch(closeTeamModal())}
              >
                Cancelar
              </Button>
            </form>
          </Modal>
        )}
      </TeamList>
      <Logout onClick={() => dispatch(signOut())}>SAIR</Logout>
    </Container>
  );
}

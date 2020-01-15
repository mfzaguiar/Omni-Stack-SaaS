import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import { MemberList, Invite } from './styles';
import Can from '~/components/Can';
import Modal from '~/components/Modal';
import Button from '~/styles/components/Button';

import {
  closeMembersModal,
  getMembersRequest,
  updateMembersRequest,
  inviteMemberRequest,
} from '~/store/modules/members/actions';

import api from '~/services/api';

export default function Members() {
  const dispatch = useDispatch();
  const members = useSelector(state => state.members);

  const [roles, setRoles] = useState([]);
  const [invite, setInvite] = useState('');

  useEffect(() => {
    dispatch(getMembersRequest());
    async function getRoles() {
      const response = await api.get('roles');
      setRoles(response.data);
    }
    getRoles();
  }, []);

  function handleRolesChange(id, roles) {
    dispatch(updateMembersRequest(id, roles));
  }

  function handleInvite(e) {
    e.preventDefault();
    dispatch(inviteMemberRequest(invite));
  }

  return (
    <Modal size="big">
      <h1>Membros</h1>
      <Can checkPermission="invites_create">
        <Invite onSubmit={e => handleInvite(e)}>
          <input
            name="invite"
            placeholder="Convidar para o time"
            value={invite}
            onChange={e => setInvite(e.target.value)}
          />
          <Button type="submit">Enviar</Button>
        </Invite>
      </Can>

      <form>
        <MemberList>
          {members.data.map(member => (
            <li key={member.id}>
              <strong>{member.user.name}</strong>
              <Can checkRole="administrator">
                {can => (
                  <Select
                    isMulti
                    isDisabled={!can}
                    options={roles}
                    value={member.roles}
                    getOptionLabel={role => role.name}
                    getOptionValue={role => role.id}
                    onChange={value => handleRolesChange(member.id, value)}
                  />
                )}
              </Can>
            </li>
          ))}
        </MemberList>

        <Button
          onClick={() => dispatch(closeMembersModal())}
          filled={false}
          color="gray"
        >
          Cancelar
        </Button>
      </form>
    </Modal>
  );
}

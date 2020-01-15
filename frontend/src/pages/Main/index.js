import React from 'react';

import Project from '~/components/Projects';
import TeamSwithcer from '~/components/TeamSwitcher';
import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <TeamSwithcer />
      <Project />
    </Container>
  );
}

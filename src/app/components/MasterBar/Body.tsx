import React from 'react';
import styled from 'styled-components';
import { UserForm } from './UserForm';
import { UserNav } from './UserNav';

export const Body = () => {
  return (
    <Wrapper>
      <UserNav />
      <UserForm />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 132px);
  padding-top: 20px;
`;

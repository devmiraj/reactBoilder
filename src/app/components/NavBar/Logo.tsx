import * as React from 'react';
import styled from 'styled-components/macro';
import Logos from '../../pages/ProfilePage/assets/images/logo.png';
export function Logo() {
  return (
    <Wrapper>
      <img src={Logos} alt="logo" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  padding: 40px 15px 10px;
`;

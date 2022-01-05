import React from 'react';
import styled from 'styled-components/macro';
import { Buttons } from '../button';
export const Header = () => {
  return (
    <Wrapper>
      <div className="breadcrumb">
        <span>Homepage</span>
        <span className="seprator">/</span>
        <span className="link">Homepage</span>
      </div>
      <Buttons color="yellow" text="Place an add" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 35px 35px 0;
  .breadcrumb {
    display: flex;
    span {
      display: inline-block;
      &.link {
        color: blue;
      }
    }

    .seprator {
      margin: 0 5px;
      display: inline-block;
    }
  }
`;

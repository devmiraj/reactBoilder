import React from 'react';
import styled from 'styled-components';

export const Buttons = (props: any) => {
  return (
    <Button>
      <button className={props.color}>{props.text}</button>
    </Button>
  );
};

const Button = styled.div`
  button {
    border: 0;
    padding: 10px 20px;
    color: white;
    font-weight: 600;
    &.yellow {
      background: #f5ca4b;
    }
    &.blue {
      background: #4b5ecb;
    }
  }
`;

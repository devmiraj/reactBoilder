import * as React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faSearch } from '@fortawesome/free-solid-svg-icons';
export function Header() {
  return (
    <Wrapper>
      <div className="title">
        <h5>Messaging</h5>
        <FontAwesomeIcon icon={faMinus} />
      </div>
      <div className="searchBar">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="Search in the mesaage" />
      </div>
    </Wrapper>
  );
}
const Prime = '#4b5ecb';
const Wrapper = styled.div`
  background: ${Prime};
  padding: 5px 15px 35px;
  .title {
    display: flex;
    justify-content: space-between;
    color: white;
    svg {
      align-self: center;
    }
  }
  .searchBar {
    background: #fff;
    padding: 8px;
    border-radius: 5px;
    input {
      border: 0;
      margin-left: 10px;
    }
  }
`;

import * as React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartBar,
  faSearch,
  faPlus,
  faBullhorn,
  faGavel,
  faStar,
  faCoins,
  faEnvelope,
  faDolly,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export function Nav() {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="#">
            <FontAwesomeIcon icon={faChartBar} />
          </Link>
        </li>
        <li>
          <Link to="#">
            <FontAwesomeIcon icon={faSearch} />
          </Link>
        </li>
        <li>
          <Link to="#">
            <FontAwesomeIcon icon={faPlus} />
          </Link>
        </li>
        <li>
          <Link to="#">
            <FontAwesomeIcon icon={faBullhorn} />
          </Link>
        </li>
        <li>
          <Link to="#">
            <FontAwesomeIcon icon={faGavel} />
          </Link>
        </li>
        <li>
          <Link to="#">
            <FontAwesomeIcon icon={faStar} />
          </Link>
        </li>
        <li>
          <Link to="#">
            <FontAwesomeIcon icon={faCoins} />
          </Link>
        </li>
        <li>
          <Link to="#">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </li>
        <li>
          <Link to="#">
            <FontAwesomeIcon icon={faDolly} />
          </Link>
        </li>
        <li>
          <Link to="#">
            <FontAwesomeIcon icon={faCalendarAlt} />
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 271px);
  text-align: center;
  ul {
    padding: 0 0;
    li {
      list-style: none;
      padding: 10px 15px;
      a {
        color: #fff;
      }
    }
  }
`;

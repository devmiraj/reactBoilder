import * as React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import demoImage1 from '../../pages/ProfilePage/assets/images/icon.png';
export function NavFooter() {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="#">
            <div className="notification">
              <FontAwesomeIcon icon={faBell} size="lg" />
              <span>6</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={demoImage1} alt="imges" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={demoImage1} alt="imges" />
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ul {
    list-style: none;
    padding: 0 15px;
    margin-bottom: 0;
    li {
      text-align: center;
      padding: 10px 15px;
      .notification {
        color: #fff;
        position: relative;
        span {
          display: inline-block;
          background: #ee7f90;
          position: absolute;
          width: 28px;
          height: 28px;
          text-align: center;
          padding: 2px;
          border-radius: 100%;
          top: -14px;
          right: -5px;
        }
      }
    }
  }
`;

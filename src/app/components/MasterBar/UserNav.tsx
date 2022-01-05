import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faWrench,
  faCommentDots,
  faStoreAlt,
} from '@fortawesome/free-solid-svg-icons';
import UserImage from '../../pages/ProfilePage/assets/images/userImages.png';
export const UserNav = () => {
  return (
    <Wrapper>
      <div className="Usernav">
        <div className="profileImages">
          <div className="thumb">
            <img src={UserImage} alt="alt" />
          </div>
          <div className="userName">
            <strong>Kors Mentenen</strong>
            <span>Professional seller</span>
          </div>
        </div>
        <div className="userlinks">
          <ul>
            <li className="active">
              {' '}
              <FontAwesomeIcon icon={faUser} /> <span>My profile</span>{' '}
            </li>
            <li>
              <FontAwesomeIcon icon={faWrench} /> <span>Account settings</span>{' '}
            </li>
            <li>
              <FontAwesomeIcon icon={faCommentDots} />{' '}
              <span>Public display</span>{' '}
            </li>
            <li>
              <FontAwesomeIcon icon={faStoreAlt} /> <span>My shop</span>{' '}
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};
const Prime = '#4b5ecb';
const Wrapper = styled.div`
  max-width:400px;
  width:100%; 
  padding: 15px;
  .Usernav {
    height: 100%;
    box-shadow: 0 0 20px #ccc;
    border-radius: 5px;
    padding: 28px;
    .profileImages {
      display: flex;
      padding-bottom: 35px;
      .thumb {
        box-shadow: 0 0 5px #6e757c;
        padding: 5px;
      }
      .userName {
        margin-left: 15px;
        // align-self: center;
        strong,
        span {
          display: block;
          color: #6e757c;
        }
        strong {
        }
      }
    }
    .userlinks {
      ul {
        padding: 0 0;
        li {
          list-style: none;
          font-size: 16px;
          padding: 8px 12px;
          color: #727272;
          margin-bottom: 5px;
          &.active {
            color: ${Prime};
            background: #f7f8fa;
          }
        }
      }
    }
  }
`;

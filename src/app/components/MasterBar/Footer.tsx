import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faInstagram,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <Wrapper>
      <div className="masterFooter">
        <div className="copyright">
          All rights reserved - CarToBike.com 2021
        </div>
        <ul className="socialLinks">
          <li>
            <Link to="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
          </li>
          <li>
            <Link to="#">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </li>
          <li>
            <Link to="#">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </li>
          <li>
            <Link to="#">
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  // padding: 15px;
  .masterFooter {
    background: #f7f7f7;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    .copyright {
      align-self: center;
    }
    .socialLinks {
      padding: 0px;
      align-self: center;
      display: flex;
      li {
        padding: 0 15px;
        list-style: none;
        a {
          width: 25px;
          height: 25px;
          background: #727272;
          display: inline-block;
          border-radius: 50%;
          text-align: center;
          svg {
            color: #f7f7f7;
          }
        }
      }
    }
  }
`;

import * as React from 'react';
import styled from 'styled-components/macro';
import activechatImage from '../../pages/ProfilePage/assets/images/activechat.png';
import activechat1Image from '../../pages/ProfilePage/assets/images/activechat1.png';
import activechatWifiImage from '../../pages/ProfilePage/assets/images/activechatWifi.png';
export function Footer() {
  return (
    <Wrapper>
      <div className="chatFooter">
        <ul>
          <li>
            <img src={activechatImage} alt="icons" />
            <span>My ads</span>
          </li>
          <li>
            <img src={activechat1Image} alt="icons" />
            <span>Other announce...</span>
          </li>
          <li>
            <img src={activechatWifiImage} alt="icons" />
            <span>liveChat</span>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-top: 1px solid #ccc;
  display: block;
  .chatFooter {
    ul {
      display: flex;
      justify-content: space-between;
      padding-left: 0;
      li {
        list-style: none;
        padding: 0 30px;
        img {
          display: block;
          margin: 0 auto;
        }
        span {
          font-size: 10px;
          display: block;
          text-align: center;
        }
      }
    }
  }
`;

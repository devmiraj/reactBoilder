import * as React from 'react';
import styled from 'styled-components/macro';
import demoImage1 from '../../pages/ProfilePage/assets/images/icon.png';
export function Body() {
  return (
    <Wrapper>
      <div className="onlineMember">
        <div className="circle">
          <img src={demoImage1} alt="sdsd" />
        </div>
        <div className="circle">
          <img src={demoImage1} alt="sdsd" />
        </div>
        <div className="circle">
          <img src={demoImage1} alt="sdsd" />
        </div>
        <div className="circle">
          <img src={demoImage1} alt="sdsd" />
        </div>
        <div className="circle">
          <img src={demoImage1} alt="sdsd" />
        </div>
        <div className="circle">
          <img src={demoImage1} alt="sdsd" />
        </div>
      </div>
      <div className="memberList">
        <div className="thumb">
          <div className="thumbInner">
            <img src={demoImage1} alt="sasa" />
            <img src={demoImage1} alt="sasa" />
          </div>
          <div>
            <strong>BMWI i3 | wear out</strong>
            <span>one year ago</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
min-height: calc(100vh - 227px);
background:#fff;
  display: block;
  .onlineMember {
    border-bottom: 1px solid #ccc;
    padding-bottom: 15px;
    overflow-x: hidden;
    display: flex;
    .circle{
      min-width:45px;
      width: 45px;
      height: 45px;
      overflow: hidden;
      margin: 10px 10px 0;
      img{
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        border-radius: 100%;
      }
    }
  }
  .memberList{
    
    overflow-y: auto;
    .thumb{
      display: flex;
      padding: 10px 15px;
      border-bottom: 1px solid #ccc;
      strong{
        font-size: 12px;
        display: block;
      }
      span{
        font-size: 12px;
        color: #8f8a8a;
      }
      img{
        &:not(:last-child){
          width: 50px;
          margin-right: 10px;
          border: 1px solid #ccc;
          border-radius: 100%;
        }
        &:last-child{
          width: 60%;
          height: 60%;
          object-fit: contain;
          border: 0;
          position: absolute;
          right: -2px;
          bottom: -5px;
        }
      }
      .thumbInner{
        position: relative;
        margin-right: 10px;
      }
    }
`;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import images from '../../pages/ProfilePage/assets/images/userImages.png';
import { Buttons } from '../button';
export const UserForm = () => {
  return (
    <Wrapper>
      <form>
        <div className="innerWrapper">
          <div className="feilds">
            <label htmlFor="">Phone</label>
            <div className="inputs">
              <div className="changeImage">
                <img src={images} alt="sds" />
                <span>
                  <FontAwesomeIcon icon={faCamera} />
                </span>
              </div>
            </div>
          </div>
          <div className="feilds">
            <label htmlFor="">E-main address *</label>
            <div className="inputs">
              <input type="text" />
            </div>
          </div>
          <div className="feilds">
            <label htmlFor="">Username *</label>
            <div className="inputs">
              <input type="text" />
            </div>
          </div>
          <div className="feilds">
            <label htmlFor="">First name *</label>
            <div className="inputs">
              <input type="text" />
            </div>
          </div>
          <div className="feilds">
            <label htmlFor="">Name *</label>
            <div className="inputs">
              <input type="text" />
            </div>
          </div>
          <div className="feilds">
            <label htmlFor="">Phone number *</label>
            <div className="inputs number">
              {/*   <select>
              <option style={{ backgroundImage: `url(${Flag})` }}>male</option>
              <option style={{ backgroundImage: `url(${Flag})` }}>
                female
              </option>
              <option style={{ backgroundImage: `url(${Flag})` }}>
                others
              </option>
            </select> */}
              <input type="text" />
            </div>
          </div>
          <div className="feilds">
            <label htmlFor="">Phone</label>
            <div className="inputs">
              <input type="text" />
            </div>
          </div>
          <div className="btnWrapper">
            <Buttons color="blue" text="Submit" />
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 15px;
  max-width: 100%;
  width: calc(100% - 400px);
  form {
    height: 100%;
    box-shadow: 0 0 20px #ccc;
    padding: 28px;
    .innerWrapper {
      .btnWrapper {
        text-align: center;
      }
      max-width: 630px;
      margin: 0 auto;
      .feilds {
        display: flex;
        padding-bottom: 30px;
        label {
          font-size: 14px;
          min-width: 150px;
          text-align: right;
          padding-right: 15px;
          align-self: center;
          color: #898686;
        }
        .inputs {
          width: calc(100% - 150px);
          .changeImage {
            position: relative;
            display: inline-block;
            box-shadow: 0 0 10px #cdc8c8;
            span {
              display: inline-block;
              width: 30px;
              height: 30px;
              background: white;
              position: absolute;
              right: -5px;
              bottom: -5px;
              text-align: center;
              border-radius: 100%;
              box-shadow: 0 0 5px #ccc;
              padding-top: 2px;
              svg {
                color: #f5ca4b;
              }
            }
          }
          input {
            height: 40px;
            border: 1px solid #dddddd;
            width: 100%;
          }
        }
      }
    }
  }
`;

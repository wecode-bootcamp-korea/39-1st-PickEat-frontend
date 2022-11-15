import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <div className="navBar">
      <h1 className="navName">
        <i class="fa-solid fa-egg" />
        P!CKEAT
      </h1>
      <ul className="navContents">
        <li className="navContentsList1">
          <p className="navP1">
            LECTURE
            <i class="fa-solid fa-chevron-down fa-sm fa-down" />
          </p>
          <div className="dropBox1 dropBoxs">
            <ul className="dropBoxUl">
              <li className="dropBoxCt1">
                <p>Korean | 한식</p>
              </li>

              <li className="dropBoxCt1">
                <p>China | 중식</p>
              </li>

              <li className="dropBoxCt1">
                <p>Japan | 일식</p>
              </li>

              <li className="dropBoxCtN">
                <p>Western | 양식</p>
              </li>
            </ul>
          </div>
          <div className="subeDropBox">
            <li className="subeDropBoxCt">
              <p>불고기</p>
            </li>
            <li className="subeDropBoxCt">
              <p>불고기</p>
            </li>
            <li className="subeDropBoxCt">
              <p>불고기</p>
            </li>
            <li className="subeDropBoxCt">
              <p>불고기</p>
            </li>
            <li className="subeDropBoxCt">
              <p>불고기</p>
            </li>
          </div>
        </li>
        <li className="navContentsList2">
          <p className="navP2">ABOUT</p>
          <div className="dropBoxs" />
        </li>
        <li className="navContentsList3">
          <p className="navP3">SHOPPING</p>
          <div className="dropBoxs" />
        </li>
        <li className="navContentsList4">
          <p className="navP4">CONTACT</p>
          <div className="dropBoxs" />
        </li>
      </ul>

      <ul className="navLoginBar">
        <li className="navLoginBarList1">
          <Link className="navLogin" to="/login">
            로그인
          </Link>
        </li>
        <li className="navLoginBarList2">
          <Link className="navSinUP" to="/signup">
            무료 회원가입
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

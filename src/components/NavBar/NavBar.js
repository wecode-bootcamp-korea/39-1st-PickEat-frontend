import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <div className="navBar">
      <h1 className="navName">
        <Link to="/">
          <i className="fa-solid fa-egg" />
          P!CKEAT
        </Link>
      </h1>

      <ul className="navContents">
        <li className="navContentsList2">
          <p className="navP2">ABOUT</p>
          <div className="dropBoxs" />
        </li>
        <li className="navContentsList1">
          <p className="navP1">
            LECTURE
            <i className="fa-solid fa-chevron-down fa-sm fa-down" />
          </p>
          <div className="dropBox1 dropBoxs">
            <ul className="dropBoxUl">
              <li className="dropBoxCt1">
                <Link>Korean | 한식</Link>
              </li>

              <li className="dropBoxCt1">
                <p>
                  <Link>China | 중식</Link>
                </p>
              </li>

              <li className="dropBoxCt1">
                <p>
                  <Link>Japan | 일식</Link>
                </p>
              </li>

              <li className="dropBoxCtN">
                <p>
                  <Link>Western | 양식</Link>
                </p>
              </li>
            </ul>
          </div>
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
          <Link className="navSinUP" to="/terms">
            무료 회원가입
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

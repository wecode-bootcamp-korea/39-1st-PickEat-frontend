import { Link } from 'react-router-dom';

import './NavBar.scss';
import ShoppingBasket from './component/UserBar/ShoppingBasket';
import LoginBar from './component/LoginBar/LoginBar';
const NavBar = () => {
  const userToken = false;

  const scroll = () => {
    window.scrollTo(0, 1290);
  };

  const scrollDown = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  return (
    <div className="navBar">
      <h1 className="navName">
        <Link className="navNameLink" to="/">
          <i className="fa-solid fa-egg" />
          P!CKEAT
        </Link>
      </h1>
      <ul className="navContents">
        <li className="navContentsList2">
          <p className="navP2" onClick={scroll}>
            ABOUT
          </p>

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
                <Link to="/detailpage">전체 카테고리</Link>
              </li>
              <li className="dropBoxCt1">
                <Link to="/detailpage">Korean | 한식</Link>
              </li>

              <li className="dropBoxCt1">
                <p>
                  <Link to="/detailpage">China | 중식</Link>
                </p>
              </li>

              <li className="dropBoxCt1">
                <p>
                  <Link to="/detailpage">Japan | 일식</Link>
                </p>
              </li>

              <li className="dropBoxCt1">
                <p>
                  <Link to="/detailpage">American | 양식</Link>
                </p>
              </li>
              <li className="dropBoxCtN">
                <p>
                  <Link to="/detailpage">Mexican | 멕시칸</Link>
                </p>
              </li>
            </ul>
          </div>
        </li>

        <li className="navContentsList3">
          <p className="navP3">SHOPPING</p>
          <div className="dropBoxs" />
        </li>
        <li className="navContentsList4" onClick={scrollDown}>
          <p className="navP4">CONTACT</p>
          <div className="dropBoxs" />
        </li>
      </ul>
      {userToken ? <ShoppingBasket /> : <LoginBar />}
    </div>
  );
};

export default NavBar;

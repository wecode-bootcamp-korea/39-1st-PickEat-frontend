import { Link } from 'react-router-dom';
import './LoginBar.scss';

const LoginBar = () => {
  return (
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
  );
};

export default LoginBar;

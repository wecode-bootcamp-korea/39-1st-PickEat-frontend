import './ShoppingBasket.scss';
import { Link } from 'react-router-dom';

const ShoppingBasket = () => {
  return (
    <ul className="navUserBar">
      <li className="navLoginBarShoppingList">
        <Link className="navLogin" to="/shoppingcart">
          <div className="cartNumber">
            <p>0</p>
          </div>
          <i className="fa-solid fa-cart-shopping fa-lg" />
        </Link>
      </li>
      <li className="navLoginBarUserList">
        <Link className="navSinUP" to="/signup">
          <i className="fa-solid fa-user fa-lg" />
        </Link>
      </li>
    </ul>
  );
};

export default ShoppingBasket;

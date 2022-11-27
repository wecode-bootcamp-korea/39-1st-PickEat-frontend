import './ShoppingBasket.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ShoppingBasket = () => {
  const [cartDatas, setCartDatas] = useState([]);
  const userToken = localStorage.getItem('token');

  useEffect(() => {
    fetch('http://10.58.52.158:3002/cart/', {
      headers: {
        'Content-Type': 'application/json',
        authorization: userToken,
      },
    })
      .then(response => response.json())
      .then(data => setCartDatas(data));
  }, []);

  return (
    <ul className="navUserBar">
      <li className="navLoginBarShoppingList">
        <Link className="navLogin" to="/shoppingcart">
          <div className="cartNumber">
            <p>{cartDatas.length - 1}</p>
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

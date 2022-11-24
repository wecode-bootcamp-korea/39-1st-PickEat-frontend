import './ShoppingBasket.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ShoppingBasket = () => {
  const [cartDatas, setCartDatas] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.158:3002/cart/', {
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY2OTIwOTIyMiwiZXhwIjoxNjY5Mjk1NjIyfQ.sB4a72yYOvOaUYrGkEsVpAUhSGVUTitLYBigXzPZNrw',
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
            <p>{cartDatas.length}</p>
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

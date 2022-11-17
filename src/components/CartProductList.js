import React, { useState } from 'react';

const CartProductList = props => {
  const { id, title, price, img } = props.product;

  const [count, setCount] = useState(1);
  const [productPrice, setProductPrice] = useState(price);

  const countUp = () => {
    setCount(count + 1);
    setProductPrice(productPrice + price);
  };

  const countDown = () => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
      setProductPrice(productPrice - price);
    }
  };

  return (
    <div className="cartProductList" key={id}>
      <input className="cartCheckbox" type="checkbox" />
      <img className="cartLectureImg" src={img} alt="lectureImg" />
      <div className="cartProductInfo">
        <div className="productName">{title}</div>
        <div className="productCount">
          <span className="productCountHeader">수량</span>
          <div className="productCountBtn">
            <button onClick={countDown}>－</button>
            <span>{count}</span>
            <button onClick={countUp}>＋</button>
          </div>
        </div>
      </div>
      <div className="cartProductPrice">
        <span>{productPrice}</span>원
      </div>
    </div>
  );
};

export default CartProductList;

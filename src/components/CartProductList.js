import React from 'react';

const CartProductList = props => {
  const { increaseBtn, decreaseBtn } = props;
  const { id, title, price, img, quantity } = props.product;

  return (
    <div className="cartProductList" key={id}>
      <input className="cartCheckbox" type="checkbox" />
      <img className="cartLectureImg" src={img} alt="lectureImg" />
      <div className="cartProductInfo">
        <div className="productName">{title}</div>
        <div className="productCount">
          <span className="productCountHeader">수량</span>
          <div className="productCountBtn">
            <button onClick={decreaseBtn}>－</button>
            <span>{quantity}</span>
            <button onClick={increaseBtn}>＋</button>
          </div>
        </div>
      </div>
      <div className="cartProductPrice">
        <span>{(price * quantity).toLocaleString()}</span>원
      </div>
    </div>
  );
};

export default CartProductList;

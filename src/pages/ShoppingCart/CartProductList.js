import React from 'react';
import './CartProductList.scss';

const CartProductList = props => {
  const { id, productId, title, price, image, quantity } = props.product;
  const { increaseBtn, decreaseBtn, deleteBtn } = props;

  return (
    <div className="cartProductList" key={id}>
      <input className="cartCheckbox" type="checkbox" defaultChecked={true} />
      <img className="cartLectureImg" src={image} alt="lectureImg" />
      <div className="cartProductInfo">
        <div className="productName">{title}</div>
        <div className="productCount">
          <span className="productCountHeader">수량</span>
          <div className="productCountBtn">
            <button
              className="btn"
              onClick={() => decreaseBtn(productId, quantity)}
            >
              －
            </button>
            <span className="quantity">{quantity}</span>
            <button
              className="btn"
              onClick={() => increaseBtn(productId, quantity)}
            >
              ＋
            </button>
          </div>
        </div>
      </div>
      <div className="cartProductPrice">
        <span className="productPrice">
          {(price * quantity).toLocaleString()}
        </span>
        원
        <button className="cartDeleteBtn" onClick={() => deleteBtn(productId)}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default CartProductList;

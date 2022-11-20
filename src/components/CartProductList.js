import React from 'react';

const CartProductList = props => {
  const { id, title, price, img, quantity } = props.product;
  const { increaseBtn, decreaseBtn } = props;
  const { deleteBtn } = props;

  return (
    <div className="cartProductList" key={id}>
      <input className="cartCheckbox" type="checkbox" defaultChecked={true} />
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
        <button className="cartDeleteBtn" onClick={() => deleteBtn(id)}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default CartProductList;

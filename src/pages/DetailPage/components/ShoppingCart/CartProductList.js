import React from 'react';

const CartProductList = props => {
  const { id, productId, title, price, image, quantity } = props.product;
  const { increaseBtn, decreaseBtn, deleteBtn, checkItems, setCheckItems } =
    props;

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems(prev => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter(el => el !== id));
    }
  };

  return (
    <div className="cartProductList" key={id}>
      <input
        className="cartCheckbox"
        type="checkbox"
        onChange={e => handleSingleCheck(e.target.checked, id)}
        checked={checkItems.includes(id)}
      />
      <img className="cartLectureImg" src={image} alt="lectureImg" />
      <div className="cartProductInfo">
        <div className="productName">{title}</div>
        <div className="productCount">
          <span className="productCountHeader">수량</span>
          <div className="productCountBtn">
            <button className="btn" onClick={decreaseBtn}>
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
        <button className="cartDeleteBtn" onClick={() => deleteBtn(id)}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default CartProductList;

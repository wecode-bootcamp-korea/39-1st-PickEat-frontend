import { useEffect, useState } from 'react';
import CartLectureList from './CartLectureList';
import CartProductList from './CartProductList';
import AsideCart from './AsideCart';
import './ShoppingCart.scss';

const ShoppingCart = () => {
  const [cartDatas, setCartDatas] = useState([]);
  const [checkItems, setCheckItems] = useState([true]);

  //강의, 도구 구분
  const lectureDatas = cartDatas.filter(cartData => {
    return cartData.type === '단과강의' || cartData.type === '코스강의';
  });

  const productDatas = cartDatas.filter(cartData => {
    return cartData.type === '요리도구';
  });

  // 개별 삭제 버튼
  const deleteBtn = productId => {
    fetch(`http://10.58.52.158:3002/cart/${productId}`, {
      method: 'delete',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY2OTIwOTIyMiwiZXhwIjoxNjY5Mjk1NjIyfQ.sB4a72yYOvOaUYrGkEsVpAUhSGVUTitLYBigXzPZNrw',
      },
    }).then(res => {
      if (res.status === 204) {
        alert('상품이 장바구니에서 삭제되었습니다');
        setCartDatas(
          cartDatas.filter(cartData => productId !== cartData.productId)
        );
      } else {
        alert('다시 시도해주세요');
      }
    });
  };

  // 수량 증가 버튼
  const increaseBtn = (productId, quantity) => () => {
    setCartDatas(
      cartDatas.map(cartData => {
        if (cartData.productId === productId && cartData.quantity < 8) {
          cartData.quantity++;
        }
        return cartData;
      })
    );

    fetch(`http://10.58.52.158:3002/cart/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY2OTIwOTIyMiwiZXhwIjoxNjY5Mjk1NjIyfQ.sB4a72yYOvOaUYrGkEsVpAUhSGVUTitLYBigXzPZNrw',
      },
      body: JSON.stringify({ quantity: quantity++ }),
    });
  };

  // 수량 감소버튼
  const decreaseBtn = (productId, quantity) => () => {
    setCartDatas(
      cartDatas.map(cartData => {
        if (cartData.productId === productId && cartData.quantity > 1) {
          cartData.quantity--;
        }
        return cartData;
      })
    );

    fetch(`http://10.58.52.158:3002/cart/${productId}`, {
      method: 'PATCH',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY2OTIwOTIyMiwiZXhwIjoxNjY5Mjk1NjIyfQ.sB4a72yYOvOaUYrGkEsVpAUhSGVUTitLYBigXzPZNrw',
      },
      body: JSON.stringify({ quantity: quantity-- }),
    });
  };

  // 백엔드 통신시
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
    <div className="container">
      <section className="sectionCart">
        <header className="sectionCartHeader">장바구니</header>
        <nav className="sectionCartControl">
          <input
            className="cartCheckbox"
            type="checkbox"
            defaultChecked={true}
          />
          <label className="allCheckedTitle">전체선택</label>
        </nav>
        <main className="sectionCartBody">
          {lectureDatas.map(lecture => (
            <CartLectureList
              key={lecture.id}
              lecture={lecture}
              deleteBtn={deleteBtn}
              checkItems={checkItems}
              setCheckItems={setCheckItems}
            />
          ))}
          <div className="line" />
          {productDatas.map(product => (
            <CartProductList
              key={product.id}
              product={product}
              deleteBtn={deleteBtn}
              increaseBtn={increaseBtn(product.productId, product.quantity)}
              decreaseBtn={decreaseBtn(product.productId, product.quantity)}
              checkItems={checkItems}
              setCheckItems={setCheckItems}
            />
          ))}
        </main>
      </section>

      <AsideCart
        cartDatas={cartDatas}
        lectureDatas={lectureDatas}
        productDatas={productDatas}
      />
    </div>
  );
};

export default ShoppingCart;

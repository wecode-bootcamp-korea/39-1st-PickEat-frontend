import { useEffect, useState } from 'react';
import CartLectureList from '../../components/CartLectureList';
import CartProductList from '../../components/CartProductList';
import './ShoppingCart.scss';

const ShoppingCart = () => {
  const [cartLectures, setCartLectures] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  const increaseBtn = id => () => {
    setCartProducts(
      cartProducts.map(product => {
        if (product.id === id && product.quantity < 5) {
          product.quantity++;
        }
        return product;
      })
    );
  };

  const decreaseBtn = id => () => {
    setCartProducts(
      cartProducts.map(product => {
        if (product.id === id && product.quantity > 1) {
          product.quantity--;
        }
        return product;
      })
    );
  };

  const deleteBtn = id => {
    // const newCartProduct = [];
    // for (let i = 0; i < cartProducts.length; i++) {
    //   if (cartProducts[i].id !== id) {
    //     newCartProduct.push(cartProducts[i]);
    //   }
    // }
    // setCartProducts(newCartProduct);
    setCartProducts(cartProducts.filter(product => product.id !== id));
  };

  const lectureDelBtn = id => {
    setCartLectures(cartLectures.filter(lecture => lecture.id !== id));
  };

  const productsPrice = cartProducts.reduce(
    (total, cartProduct) => total + cartProduct.price * cartProduct.quantity,
    0
  );

  const lecturePrice = cartLectures.reduce(
    (total, cartLecture) => total + cartLecture.price,
    0
  );

  useEffect(() => {
    fetch('data/cartData.json')
      .then(response => response.json())
      .then(data => setCartLectures(data));
  }, []);

  useEffect(() => {
    fetch('data/cartProductData.json')
      .then(response => response.json())
      .then(data => setCartProducts(data));
  }, []);

  // data/cartProductData.json
  // http://10.58.52.98:3002/products?type=lecture&name=한식

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
          <label>전체선택</label>
          <button className="deleteBtn">선택삭제 ✖</button>
        </nav>
        <main className="sectionCartBody">
          {cartLectures.map(lecture => (
            <CartLectureList
              key={lecture.id}
              lecture={lecture}
              lectureDelBtn={lectureDelBtn}
            />
          ))}
          {cartProducts.map(product => (
            <CartProductList
              key={product.id}
              product={product}
              increaseBtn={increaseBtn(product.id)}
              decreaseBtn={decreaseBtn(product.id)}
              deleteBtn={deleteBtn}
            />
          ))}
        </main>
      </section>

      <aside className="asideCart">
        <section className="buyerInfo">
          <header className="buyerInfoHeader">
            구매자정보
            <button className="buyerInfoChange">수정</button>
          </header>
          <dl className="buyerInfoList">
            <div>
              <dt>이름</dt>
              <dd>김보윤</dd>
            </div>
            <div>
              <dt>이메일</dt>
              <dd>kby0908@naver.com</dd>
            </div>
            <div>
              <dt>휴대폰 번호</dt>
              <dd>+82 01012345678</dd>
            </div>
          </dl>
        </section>

        <section className="voucherInfo">
          <div className="pointUsing">
            <label className="pointUsingTitle">포인트</label>
            <span className="pointHave">보유 0</span>
          </div>
          <div className="pointUsingInteraction">
            <input
              className="pointUsingInput"
              placeholder="1,000P 이상 사용가능"
            />
            <button className="pointUsingAllBtn">전액사용</button>
          </div>

          <div className="priceRegular">
            <span>선택강의 금액</span>
            <div>{lecturePrice.toLocaleString()}원</div>
          </div>

          <div className="priceRegular">
            <span>선택상품 금액</span>
            <div>{productsPrice.toLocaleString()}원</div>
          </div>

          <div className="priceDiscount">
            <span>할인금액</span>
            <div>0원</div>
          </div>

          <div className="pricePay">
            <span>총 결제금액</span>
            <div>{(lecturePrice + productsPrice).toLocaleString()}원</div>
          </div>

          <button className="payBtn">결제하기</button>

          <div className="payAgreement">
            회원 본인은 주문내용을 확인했으며, 구매조건 및 개인정보취급방침과
            결제에 동의합니다.
          </div>
        </section>
      </aside>
    </div>
  );
};

export default ShoppingCart;

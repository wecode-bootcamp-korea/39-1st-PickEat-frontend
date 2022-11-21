import { useEffect, useState } from 'react';
import CartLectureList from '../../components/ShoppingCart/CartLectureList';
import CartProductList from '../../components/ShoppingCart/CartProductList';
import './ShoppingCart.scss';

const ShoppingCart = () => {
  const [cartDatas, setCartDatas] = useState([]);

  const lectureDatas = cartDatas.filter(cartData => {
    return cartData.type === '단과강의' || cartData.type === '코스강의';
  });

  const productDatas = cartDatas.filter(cartData => {
    return cartData.type === '상품';
  });

  const deleteBtn = id => {
    //   // const newCartData = [];
    //   // for (let i = 0; i < cartDatas.length; i++) {
    //   //   if (cartDatas[i].id !== id) {
    //   //     newCartData.push(cartDatas[i]);
    //   //   }
    //   // }
    //   // setCartDatas(newCartData);
    setCartDatas(cartDatas.filter(cartData => cartData.id !== id));
  };

  const increaseBtn = id => () => {
    setCartDatas(
      cartDatas.map(cartData => {
        if (cartData.id === id && cartData.quantity < 5) {
          cartData.quantity++;
        }
        return cartData;
      })
    );
  };

  const decreaseBtn = id => () => {
    setCartDatas(
      cartDatas.map(cartData => {
        if (cartData.id === id && cartData.quantity > 1) {
          cartData.quantity--;
        }
        return cartData;
      })
    );
  };

  const productsPrice = productDatas.reduce(
    (total, productData) => total + productData.price * productData.quantity,
    0
  );

  const lecturePrice = lectureDatas.reduce(
    (total, lectureData) => total + lectureData.price,
    0
  );

  useEffect(() => {
    fetch('data/cartData.json')
      .then(response => response.json())
      .then(data => setCartDatas(data));
  }, []);

  // 백엔드 통신시
  useEffect(() => {
    fetch('')
      .then(response => response.json())
      .then(data => setCartDatas(data));
  });

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
          <button className="deleteBtn">선택삭제 ✖</button>
        </nav>
        <main className="sectionCartBody">
          {lectureDatas.map(lecture => (
            <CartLectureList
              key={lecture.id}
              lecture={lecture}
              deleteBtn={deleteBtn}
            />
          ))}
          <div className="lecturePrice" />
          {productDatas.map(product => (
            <CartProductList
              key={product.id}
              product={product}
              deleteBtn={deleteBtn}
              increaseBtn={increaseBtn(product.id)}
              decreaseBtn={decreaseBtn(product.id)}
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

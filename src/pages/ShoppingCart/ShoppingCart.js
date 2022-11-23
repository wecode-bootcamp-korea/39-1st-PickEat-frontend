import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartLectureList from '../DetailPage/components/ShoppingCart/CartLectureList';
import CartProductList from '../DetailPage/components/ShoppingCart/CartProductList';
import './ShoppingCart.scss';

const ShoppingCart = () => {
  const [cartDatas, setCartDatas] = useState([]);
  const [checkItems, setCheckItems] = useState([]);
  const navigate = useNavigate();

  //체크박스 전체 선택
  const handleAllCheck = checked => {
    if (checked) {
      const newCheckArr = [];
      cartDatas.forEach(el => newCheckArr.push(el.id));
      setCheckItems(newCheckArr);
    } else {
      setCheckItems([]);
    }
  };

  console.log(checkItems);

  // 선택 삭제 버튼
  const selectDelete = () => {
    const afterDeleted = cartDatas.filter(el => !checkItems.includes(el.id));
    setCartDatas(afterDeleted);
    setCheckItems([]);
  };

  //강의, 도구 구분
  const lectureDatas = cartDatas.filter(cartData => {
    return cartData.type === '단과강의' || cartData.type === '코스강의';
  });

  console.log(lectureDatas);

  const productDatas = cartDatas.filter(cartData => {
    return cartData.type === '요리도구';
  });

  console.log(cartDatas);

  // 개별 삭제 버튼
  const deleteBtn = id => {
    // setCartDatas(cartDatas.filter(cartData => cartData.id !== id));
    // `${API.carts}/${id}`
    fetch(`http://10.58.52.158:3002/cart/${id.productId}`, {
      method: 'delete',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY2OTEyMjY3OCwiZXhwIjoxNjY5MjA5MDc4fQ.BQTqIbndJIm80g6VS6ID2ugpQAiInVqD4r2ww6Jr1Qk',
      },
    }).then(res => {
      if (res.status === 204) {
        alert('상품이 장바구니에서 삭제되었습니다');
        setCartDatas(cartDatas.filter(cartData => cartData.id !== id));
      } else {
        alert('다시 시도해주세요');
      }
    });
  };

  // 수량 증가 버튼
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
  // 수량 증가 백엔드 통신
  // fetch(``, {
  //   method: 'PATCH',
  //   headers: { authorization: localStorage.getItem('token') },
  //   body: JSON.stringify({ quantity: cartDatas[id].quantity }),
  // })
  //   .then(res => res.json())
  //   .then(result => {
  //     if (result.message === 'SUCCESS') {
  //       setCartDatas(
  //         cartDatas.map(cartData => {
  //           if (cartData.id === id && cartData.quantity < 5) {
  //             cartData.quantity++;
  //           }
  //           return cartData;
  //         })
  //       );
  //     } else {
  //       alert('다시 시도해주세요');
  //     }
  //   });

  // 수량 감소버튼
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

  // 수량 감소 백엔드 통신
  // fetch('', {
  //   method: 'PATCH',
  //   headers: { authorization: localStorage.getItem('token') },
  //   body: JSON.stringify({ quantity: cartDatas[id].quantity }),
  // })
  //   .then(res => res.json())
  //   .then(result => {
  //     if (result.message === 'SUCCESS') {
  //       setCartDatas(
  //         cartDatas.map(cartData => {
  //           if (cartData.id === id && cartData.quantity > 1) {
  //             cartData.quantity--;
  //           }
  //           return cartData;
  //         })
  //       );
  //     }
  //   });

  // 금액 합계
  const productsPrice = productDatas.reduce(
    (total, productData) =>
      Number(total + productData.price * productData.quantity).toLocaleString(),
    0
  );

  const lecturePrice = lectureDatas.reduce(
    (total, lectureData) => Number(total + lectureData.price).toLocaleString(),
    0
  );

  const payBtn = () => {
    if (cartDatas.length !== 0) {
      alert('결제되었습니다!');
      navigate('/main');
    } else {
      alert('상품을 담아주세요!');
    }
  };

  // 백엔드 통신시
  useEffect(() => {
    fetch('http://10.58.52.158:3002/cart/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY2OTEyMjY3OCwiZXhwIjoxNjY5MjA5MDc4fQ.BQTqIbndJIm80g6VS6ID2ugpQAiInVqD4r2ww6Jr1Qk',
      },
    })
      .then(response => response.json())
      .then(data => setCartDatas(data)); //콜백함수//
  }, []);

  // useEffect(() => {
  //   fetch('/data/cartData.json')
  //     .then(response => response.json())
  //     .then(data => setCartDatas(data));
  // }, []);

  return (
    <div className="container">
      <section className="sectionCart">
        <header className="sectionCartHeader">장바구니</header>
        <nav className="sectionCartControl">
          <input
            className="cartCheckbox"
            type="checkbox"
            defaultChecked={false}
            onChange={e => handleAllCheck(e.target.checked)}
            checked={checkItems.length === cartDatas.length ? true : false}
          />
          <label className="allCheckedTitle">전체선택</label>
          <button className="deleteBtn" onClick={selectDelete}>
            선택삭제 ✖
          </button>
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
          <div className="lecturePrice" />
          {productDatas.map(product => (
            <CartProductList
              key={product.id}
              product={product}
              deleteBtn={deleteBtn}
              increaseBtn={increaseBtn(product.id)}
              decreaseBtn={decreaseBtn(product.id)}
              checkItems={checkItems}
              setCheckItems={setCheckItems}
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
          <dlv className="buyerInfoContent">
            <div className="buyerInfoList">
              <dt className="infoTitle">이름</dt>
              <dd className="infoContent">김보윤</dd>
            </div>
            <div className="buyerInfoList">
              <dt className="infoTitle">이메일</dt>
              <dd className="infoContent">kby0908@naver.com</dd>
            </div>
            <div className="buyerInfoList">
              <dt className="infoTitle">휴대폰 번호</dt>
              <dd className="infoContent">+82 01012345678</dd>
            </div>
          </dlv>
        </section>

        <section className="voucherInfo">
          <div className="pointUsing">
            <label className="pointUsingTitle">포인트</label>
            <span className="pointHave">보유 100,000 P</span>
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
            <div>{lecturePrice}원</div>
          </div>

          <div className="priceRegular">
            <span>선택상품 금액</span>
            <div>{productsPrice}원</div>
          </div>

          <div className="priceDiscount">
            <span>할인금액</span>
            <div>0원</div>
          </div>

          <div className="pricePay">
            <span>총 결제금액</span>
            <div>{(lecturePrice + productsPrice).toLocaleString()}원</div>
          </div>

          <button className="payBtn" onClick={payBtn}>
            결제하기
          </button>

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

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import ReviewList from './ReviewList';
import './ProductDetailPage.scss';

const ProductDetailPage = () => {
  const [productDatas, setProductDatas] = useState([]);
  const [review, setReview] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const [count, setCount] = useState(1);
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const navigate = useNavigate();

  const userToken = localStorage.getItem('token');

  let star = clicked.filter(Boolean).length;
  const valid = review.length >= 5 && star > 0 ? false : true;
  const ARRAY = [0, 1, 2, 3, 4];

  // 별점 매기기
  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  // 입력된 리뷰 가져오기
  const handleReview = e => {
    setReview(e.target.value);
  };

  // 리뷰 달기 버튼
  const saveReview = () => {
    setReviewList([...reviewList, { content: review, rate: star }]);
    alert('리뷰가 등록되었습니다!');
    setReview('');
    setClicked([]);

    fetch(`http://10.58.52.175:3000/comment/product/${productDatas.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTY2OTE4ODc3NiwiZXhwIjoxNjY5Mjc1MTc2fQ.3TaDTqvH9NI4IKYEUHZEOZwK_7wdcGaLb_NM5mkByZY',
      },
      body: JSON.stringify({
        content: review,
        rate: star,
      }),
    }).then(res => console.log(res));
  };

  // 수량 증감 버튼
  const increaseBtn = () => {
    setCount(count => count + 1);
  };

  const decreaseBtn = () => {
    if (count > 1) {
      setCount(count => count - 1);
    }
  };

  // 장바구니 담기 버튼
  const goToCart = () => {
    alert('장바구니에 성공적으로 담겼습니다!');
    navigate('/shoppingcart');

    fetch(`http://10.58.52.158:3002/lectures/${productDatas.id}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: userToken,
      },
      body: JSON.stringify({
        quantity: count,
      }),
    });
  };

  // 구매하기 버튼
  const payBtn = () => {
    alert('구매 완료되었습니다!');
    navigate('/');
  };

  // 상품 불러오기
  useEffect(() => {
    fetch(`http://10.58.52.158:3002/lectures/17`)
      .then(response => response.json())
      .then(data => setProductDatas(data));
  }, []);

  // Review 데이터 불러오기
  // useEffect(() => {
  //   fetch(`http://10.58.52.175:3000/comment/product/${productDatas.id}`)
  //     .then(response => response.json())
  //     .then(data => setReviewList(data));
  // }, [productDatas.id]);

  console.log(reviewList);

  return (
    <div className="productDetailPage">
      <header className="product">
        <img
          className="productImg"
          src={productDatas.profileImg}
          alt="productImg"
        />
        <div className="productContent">
          <div className="productBrandName">PiCKEAT</div>
          <div className="productName">{productDatas?.title}</div>
          <div className="productPrice">
            {Number(productDatas.price).toLocaleString()}원
          </div>
          <div className="productDelivery">
            <div className="productDeliveryTitle">배송</div>
            <div className="productDeliveryPrice">무료배송</div>
          </div>

          <div className="productSeller">
            <div className="productSellerTitle">판매자</div>
            <div className="productSellerName">P!CKEAT</div>
          </div>

          <div className="productOption">
            <div className="productOptionTitle">수량</div>
            <div className="productOptionAmount">
              <button className="decreaseBtn" onClick={decreaseBtn}>
                －
              </button>
              <span className="amount">{count}</span>
              <button className="increaseBtn" onClick={increaseBtn}>
                ＋
              </button>
            </div>
          </div>

          <div className="productSelected">
            <div className="productSelectedTitle">주문금액</div>
            <div className="productSelectedPrice">
              {(count * productDatas.price).toLocaleString()}원
            </div>
          </div>

          <div className="payFormBtns">
            <button className="cartBtn" onClick={goToCart}>
              장바구니
            </button>
            <button className="payBtn" onClick={payBtn}>
              바로구매
            </button>
          </div>
        </div>
      </header>
      <main className="productDetailPageMain">
        <nav className="productDetailPageMainNavBar">
          <div className="navBarInfo">상품정보</div>
          <div className="navBarReview">리뷰</div>
          <div className="navBarCall">자주하는 질문</div>
        </nav>

        <aside className="productDetailPageAside">
          <div className="asideSelectedProduct">
            <div className="asideProductName">{productDatas.title}</div>

            <div className="asideProductOption">
              <span className="asideOptionTitle">수량</span>
              <span className="asideOptionAmount">
                <button className="decreaseBtn" onClick={decreaseBtn}>
                  －
                </button>
                <span className="amount">{count}</span>
                <button className="increaseBtn" onClick={increaseBtn}>
                  ＋
                </button>
              </span>
            </div>
          </div>

          <div className="asideProductPrice">
            <div className="asidePrice">
              {(count * productDatas.price).toLocaleString()}원
            </div>
            <div className="payFormBtns">
              <button className="cartBtn" onClick={goToCart}>
                장바구니 담기
              </button>
              <button className="payBtn" onClick={payBtn}>
                바로 구매하기
              </button>
            </div>
          </div>
        </aside>

        <div className="productDetailPageContent">
          <div className="productDetailPageInfo">
            <div className="productInfoTitle">상품 정보</div>
            <img
              className="productImg"
              src={productDatas?.description}
              alt="productImg"
            />
          </div>
          <div className="review">
            <div className="reviewTitle" id="review">
              리뷰
            </div>
            <div className="reviewSubTitle">직접 작성하신 리뷰입니다.</div>
            <div className="inputBox">
              <div className="countingStar">
                {ARRAY.map((el, idx) => {
                  return (
                    <FaStar
                      key={idx}
                      size="30"
                      onClick={() => handleStarClick(el)}
                      className={clicked[el] && 'yellowStar'}
                    />
                  );
                })}
              </div>

              <div className="inputBoxStar">별점을 선택해주세요</div>
              <textarea
                className="reviewInputBox"
                type="text"
                placeholder="리뷰를 10자 이상 작성해주세요."
                onChange={handleReview}
                value={review}
              />
              <button
                className="enrollBtn"
                onClick={saveReview}
                disabled={valid}
              >
                등록
              </button>
            </div>
          </div>
          {reviewList.map(review => (
            <ReviewList
              key={review.id}
              review={review}
              ARRAY={ARRAY}
              clicked={clicked}
            />
          ))}
        </div>

        <div className="productQna">
          <div className="productQnaTitle">자주하는 질문</div>

          <div>
            <div className="productQnaQuestion">
              교환(반품) 진행 시, 배송비가 부과되나요?
            </div>
            <div className="productQnaAnswer">
              - 단순 변심에 의한 교환/반품 시 배송비 6,000원 (주문건 배송비를 낸
              경우 3,000원)을 고객님께서 부담하셔야 합니다.
            </div>

            <div className="productQnaQuestion">
              구매 영수증은 어떻게 발급 받나요?
            </div>
            <div className="productQnaAnswer">
              - 구매하신 주문건의 영수증 출력과 관련하여 직접 조회가
              어려우십니다. 해당 내용은 PiCKEAT 고객센터로 문의 부탁드립니다.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailPage;

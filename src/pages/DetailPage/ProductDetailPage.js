import React, { useState } from 'react';
import './ProductDetailPage.scss';

const ProductDetailPage = () => {
  const [review, setReview] = useState([]);
  const [reviewList, setReviewList] = useState([]);

  const handleReview = e => {
    setReview(e.target.value);
  };

  const saveReview = () => {
    setReviewList([...reviewList, review]);
    setReview('');
  };

  return (
    <div className="productDetailPage">
      <header className="product">
        <img
          className="productImg"
          src="../../images/product.jpg"
          alt="productImg"
        />
        <container className="productContent">
          <div className="productBrandName">브랜드명</div>
          <div className="productName">크리스탈 유리잔</div>
          <div className="productPrice">30000원</div>
          <div className="productDelivery">
            <div className="productDeliveryTitle">배송</div>
            <div className="productDeliveryContent">
              <div className="productDeliveryPrice">3000원</div>
              <div className="productDeliveryCondition">
                5만원 이상 주문시 무료배송
              </div>
            </div>
          </div>

          <div className="productSeller">
            <div className="productSellerTitle">판매자</div>
            <div className="productSellerName">P!CKEAT</div>
          </div>

          <div className="productOption">
            <div className="productOptionTitle">수량</div>
            <div className="productOptionAmount">
              <button className="decreaseBtn">－</button>
              <span className="amount">개수</span>
              <button className="increaseBtn">＋</button>
            </div>
          </div>

          <div className="productSelected">
            <div className="productSelectedTitle">주문금액</div>
            <div className="productSelectedPrice">60000원</div>
          </div>

          <div className="payFormBtns">
            <button className="cartBtn">장바구니</button>
            <button className="payBtn">바로구매</button>
          </div>
        </container>
      </header>

      <main className="productDetailPageMain">
        <nav className="productDetailPageMainNavBar">
          <div className="navBarInfo">상품정보</div>
          <div className="navBarReview">리뷰</div>
          <div className="navBarCall">자주하는 질문</div>
        </nav>

        <aside className="productDetailPageAside">
          <div className="asideSelectedProduct">
            <div className="asideProductName">제품 이름</div>

            <div className="asideProductOption">
              <span className="asideOptionTitle">수량</span>
              <span className="asideOptionAmount">
                <button className="decreaseBtn">－</button>
                <span className="amount">개수</span>
                <button className="increaseBtn">＋</button>
              </span>
            </div>
          </div>

          <div className="asideProductPrice">
            <div className="asidePrice">가격</div>
            <div className="payFormBtns">
              <button className="cartBtn">장바구니 담기</button>
              <button className="payBtn">바로 구매하기</button>
            </div>
          </div>
        </aside>

        <div className="productDetailPageContent">
          <div className="productDetailPageInfo">
            <div className="productInfoTitle">상품 정보</div>
            {/* <img alt="productImg" /> */}
            <div className="productInfoContent">
              이 부분에 이미지가 들어갑니당
              <div>
                어떤 잔에 마시는지에 따라서 와인은 전혀 다른 면모를 보이기도
                합니다.
              </div>
            </div>
          </div>

          <div className="review">
            <div className="reviewTitle" id="review">
              리뷰
            </div>
            <div className="reviewSubTitle">직접 작성하신 리뷰입니다.</div>
            <div className="inputBox">
              <div className="ratingStar">
                <div className="ratingBackGroundImg">
                  {/* <div className="rating" style={width: productData.rate}/> */}
                </div>
              </div>
              <div className="inputBoxStar">별점을 선택해주세요</div>
              <textarea
                className="reviewInputBox"
                type="text"
                placeholder="리뷰를 10자 이상 작성해주세요."
                onChange={handleReview}
                value={review}
              />
              <button className="enrollBtn" onClick={saveReview}>
                등록
              </button>
            </div>
          </div>

          {reviewList.map((comment, key) => {
            return (
              <div key={key} className="commentList">
                <div className="commentInfo">
                  <img
                    src="../../images/product.jpg"
                    className="profileImg"
                    alt="profileImage"
                  />
                  <div className="commentStarId">
                    <div className="commentStar">Star</div>
                    <div className="commentId">id</div>
                  </div>
                </div>
                <div className="comment">{comment}</div>
              </div>
            );
          })}
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

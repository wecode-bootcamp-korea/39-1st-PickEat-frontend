import './ProductDetailPage.scss';

const ProductDetailPage = () => {
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
          <div className="navBarReview">후기</div>
          <div className="navBarCall">문의</div>
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
              <div className="inputBoxStar">별점을 선택해주세요</div>
              <textarea
                className="reviewInputBox"
                type="text"
                placeholder="리뷰를 10자 이상 작성해주세요."
              />
              <button className="enrollBtn">등록</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailPage;

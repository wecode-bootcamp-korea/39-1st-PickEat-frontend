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
          <div className="productName">다용도 주방 가위</div>
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
        <div></div>
        <div>상품 정보</div>

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
      </main>
    </div>
  );
};

export default ProductDetailPage;

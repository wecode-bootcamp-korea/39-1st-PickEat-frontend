import './ProductDetailPage.scss';

const ProductDetailPage = () => {
  return (
    <div>
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
            <div className="productDeliveryPrice">3000원</div>
            <div className="productDeliveryCondition">
              5만원 이상 주문시 무료배송
            </div>
          </div>
          <div className="productSeller">
            <div className="productSellerTitle">판매자</div>
            <div className="productSellerName">PICKEAT</div>
          </div>
          <div className="productOption">
            <div className="productOptionTitle">수량</div>
            <div className="prodcutOptionAmount">1개</div>
          </div>

          <div className="productSelectedPrice">주문금액</div>
        </container>
      </header>

      <main>
        <nav>
          <ul>
            <li>상품정보</li>
            <li>후기</li>
            <li>문의</li>
          </ul>
        </nav>
        <aside>
          <div>수량</div>
          <div>1개</div>
          <div>가격</div>
          <button>바로 구매하기</button>
          <button>장바구니 담기</button>
        </aside>
      </main>
    </div>
  );
};

export default ProductDetailPage;

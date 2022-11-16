import './ShoppingCart.scss';

const ShoppingCart = () => {
  return (
    <div className="container">
      <section className="sectionCart">
        <header className="sectionCartHeader">장바구니</header>
        <nav className="sectionCartControl">
          <input className="cartCheckbox" type="checkbox" />
          <label>전체선택</label>
          <button className="deleteBtn">선택삭제 ✖</button>
        </nav>

        <main className="sectionCartBody">
          <div className="cartLectureList">
            <input className="cartCheckbox" type="checkbox" />
            <img
              className="cartLectureImg"
              src="../../images/baking.jpg"
              alt="lectureImg"
            />
            <div className="cartLectureInfo">
              <div className="cartLectureTitle">강의제목강의제목</div>
              <span className="lectureInstructor">선생님</span>
              <span className="lectureDuration">무제한 수강</span>
            </div>
            <div className="cartLecturePrice">
              <span>55,000</span>원
            </div>
          </div>
          <div className="cartProductList">
            <input className="cartCheckbox" type="checkbox" />
            <img
              className="cartLectureImg"
              src="../../images/baking.jpg"
              alt="lectureImg"
            />
            <div className="cartProductInfo">
              <div className="productName">도구도구도구</div>
              <div className="productCount">
                <span className="productCountHeader">수량</span>
                <div className="productCountBtn">
                  <button>–</button>
                  <span>2</span>
                  <button>+</button>
                </div>
              </div>
            </div>
            <div className="cartProductPrice">
              <span>55,000</span>원
            </div>
          </div>
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
            <label>포인트</label>
            <span>보유 0</span>
          </div>
          <div className="pointUsingInteraction">
            <input placeholder="1,000P 이상 사용가능" />
            <button>전액사용</button>
          </div>

          <div className="priceRegular">
            <span>선택상품 금액</span>
            <div>12,000원</div>
          </div>

          <div className="priceDiscount">
            <span>할인금액</span>
            <div>0원</div>
          </div>

          <div className="pricePay">
            <span>총 결제금액</span>
            <div>12,000원</div>
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

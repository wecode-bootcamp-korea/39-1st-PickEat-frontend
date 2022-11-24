import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AsideCart.scss';

const AsideCart = props => {
  const { cartDatas, lectureDatas, productDatas } = props;
  const navigate = useNavigate();

  const productsPrice = productDatas
    .map(item => item.price * item.quantity)
    .reduce((a, b) => a + b, 0);

  const lecturePrice = lectureDatas
    .map(item => item.price * 1)
    .reduce((a, b) => a + b, 0);

  const totalPrice = (productsPrice + lecturePrice).toLocaleString();

  const payBtn = () => {
    if (cartDatas.length !== 0) {
      alert('결제되었습니다!');
      navigate('/main');
    } else {
      alert('상품을 담아주세요!');
    }
  };

  return (
    <aside className="asideCart">
      <section className="buyerInfo">
        <header className="buyerInfoHeader">
          구매자정보
          <button className="buyerInfoChange">수정</button>
        </header>
        <div className="buyerInfoContent">
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
        </div>
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
          <div>{totalPrice}원</div>
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
  );
};

export default AsideCart;

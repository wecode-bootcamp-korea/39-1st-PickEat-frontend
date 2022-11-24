import React from 'react';
import './Footer.scss';

function Footer() {
  const TopBtn = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer_main_box">
      <div className="footer_top_menu">
        <div className="footer_menu">
          <div className="menu_title">
            <span>
              {' '}
              <i className="fa-solid fa-egg" />
            </span>
            P!CKEAT
          </div>
          <div className="menu_sublist">
            <a className="list_text">P!CKEAT 소개</a>
            <a className="list_text">대표이사 소개</a>
          </div>
        </div>
        <div className="footer_menu">
          <div className="menu_title">신청하기</div>
          <div className="menu_sublist">
            <a className="list_text">코스요리</a>
            <a className="list_text">단과요리</a>
          </div>
        </div>
        <div className="footer_menu">
          <div className="menu_title">코드등록</div>
          <div className="menu_sublist">
            <a className="list_text">포인트코드 등록</a>
            <a className="list_text">수강코드 등록</a>
          </div>
        </div>
        <div className="footer_menu">
          <div className="menu_title">고객센터</div>
          <div className="menu_sublist">
            <a className="list_text">공지사항</a>
            <a className="list_text">자주묻는 질문</a>
          </div>
        </div>
      </div>
      <div className="footer_inside">
        <div className="footer_wrap">
          <div className="footer_textBox">
            <div className="footer_text">
              <div className="left_footer">
                <p className="call_center">고객센터</p>
                <p className="call_center_phone">1588-828200</p>
                <p className="call_time"> 10:00 ~ 14:00 (주말, 공휴일 제외)</p>
              </div>
              <div className="right_footer">
                <p>(주) P!CKEAT</p>

                <p>
                  서울특별시 강남구 테헤란로 427 10층
                  <br /> 대표이사 : 김세호
                </p>
                <p>개인정보관리책임자 : 김보윤</p>
                <p>사업자 번호 : 02-8282-8282&nbsp; </p>
                <p>통신판매업신고 : 제 8282-서울강남구-8282호</p>
                <p>계좌 : 찍먹은행 1004-8282-8282 &nbsp;(주) PICKEAT&nbsp;</p>
                <p>호스팅 제공자 : (주)찍먹</p>
                <p>이메일 : PICKEAT@eat.co.kr</p>
                <p>팩스:078-8282-8282</p>
              </div>
            </div>
          </div>
          <div className="footer_Nav">
            <div className="footer_Policy">
              <button className="policy_text1" placeholder="이용약관" />
              <button className="policy_text2" placeholder="개인정보처리방침" />
            </div>
          </div>
        </div>
      </div>

      <button className="top_btn" onClick={TopBtn}>
        <i className="fas fa-chevron-up fa-3x" />
      </button>
    </footer>
  );
}

export default Footer;

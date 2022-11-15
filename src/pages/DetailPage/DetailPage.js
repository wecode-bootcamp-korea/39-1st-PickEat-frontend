import React, { useState } from 'react';
import './DetailPage.scss';

const DetailPage = () => {
  const [comment, setComment] = useState('');

  const handleComment = e => {
    setComment(e.target.value);
  };

  return (
    <div className="detailPage">
      <div className="lecture">
        <img
          className="lectureImg"
          src="../../images/baking.jpg"
          alt="lectureImg"
        />
        <div className="lectureInfo">
          <p className="lectureInfoIndex">강의 코스 양식</p>
          <p className="lectureInfoName">Baking 베이킹</p>
          <br />
          <p className="lectureInfoCount">63개의 수강평 & 1901명의 수강생</p>
          <div className="lectureInfoBtn">
            <span>#</span>
            <button>레시피</button>
            <button>양식</button>
            <button>제과제빵</button>
          </div>
        </div>
      </div>
      <div className="detailInformation">
        <nav className="detailNavBar">
          <a href="#introduce">강의소개</a>
          <a href="#curriculum">커리큘럼</a>
          <a href="#review">수강평</a>
          <a href="#qna">Q & A</a>
        </nav>
        <form className="payForm">
          <div>가격:</div>
          <div className="payFormBtns">
            <button className="payBtn">바로 수강하기</button>
            <button className="cartBtn">장바구니 담기</button>
          </div>
        </form>
        <div className="content">
          <div className="introduceTitle" id="introduce">
            강의소개
          </div>
          <div>
            <div id="curriculum">커리큘럼입니다.</div>
            <div>
              <div>
                <i class="fa-regular fa-circle-play" />
                <span> 0. Intro</span>
              </div>
              <div>
                <i class="fa-regular fa-circle-play" />
                <span> 0. Intro</span>
              </div>
              <div>
                <i class="fa-regular fa-circle-play" />
                <span> 0. Intro</span>
              </div>
              <div>
                <i class="fa-regular fa-circle-play" />
                <span> 0. Intro</span>
              </div>
              <div>
                <i class="fa-regular fa-circle-play" />
                <span> 0. Intro</span>
              </div>
              <div>
                <i class="fa-regular fa-circle-play" />
                <span> 0. Intro</span>
              </div>
              <div>
                <i class="fa-regular fa-circle-play" />
                <span> 0. Intro</span>
              </div>
            </div>
          </div>
          <div className="review">
            <div className="reviewTitle" id="review">
              수강평
            </div>
            <div className="reviewSubTitle">직접 작성하신 수강평입니다.</div>
            <div className="inputBox">
              <div className="inputBoxStar">별점을 선택해주세요</div>
              <input
                type="text"
                placeholder="수강평을 10자 이상 작성해주세요."
                onChange={handleComment}
              />
              <button className="enrollBtn">등록</button>
            </div>
          </div>
          <div id="qna">Q & A</div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

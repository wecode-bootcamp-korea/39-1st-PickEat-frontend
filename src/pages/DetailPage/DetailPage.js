import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DetailPage.scss';

const DetailPage = () => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);

  const handleComment = e => {
    setComment(e.target.value);
  };

  const saveComment = () => {
    setCommentList([...commentList, comment]);
    setComment('');
  };

  const valid = comment.length >= 10 ? false : true;

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.98:3002/lectures/1')
      .then(response => response.json())
      .then(data => setProductData(data));
  }, []);

  console.log(productData);
  // http://10.58.52.98:3002/lectures/1
  // ../../data/detailPageData.json
  return (
    <div className="detailPage">
      <div className="lecture">
        <img
          className="lectureImg"
          src={productData.profileImg}
          alt="lectureImg"
        />
        <div className="lectureInfo">
          <p className="lectureInfoIndex">강의 코스 {productData.category}</p>
          <p className="lectureInfoName">{productData.title}</p>
          <br />
          <p className="lectureInfoCount">63개의 수강평 & 1901명의 수강생</p>
          <div className="lectureInfoBtn">
            <span>#</span>
            <button className="lectureHashTag">레시피</button>
            <button className="lectureHashTag">{productData.category}</button>
            <button className="lectureHashTag">제과제빵</button>
          </div>
        </div>
      </div>
      <div className="detailInformation">
        <nav className="detailNavBar">
          <a href="#introduce" className="detailNavBarHeader">
            강의소개
          </a>
          <a href="#curriculum" className="detailNavBarHeader">
            커리큘럼
          </a>
          <a href="#review" className="detailNavBarHeader">
            수강평
          </a>
          <a href="#qna" className="detailNavBarHeader">
            Q & A
          </a>
        </nav>
        <form className="payForm">
          <div>{productData.price}원</div>
          <div className="payFormBtns">
            <button className="payBtn">바로 수강하기</button>
            <button className="cartBtn">장바구니 담기</button>
          </div>
          <ul className="payFormInfo">
            <li className="payFormDuration">총 10개 수업 (11시간 1분)</li>
            <li className="payFormDuration">수강기한: 무제한</li>
            <li className="payFormDuration">난이도: 초급</li>
          </ul>
        </form>
        <div className="content">
          <div className="introduceTitle" id="introduce">
            강의소개
          </div>
          <div>가지고 있는 장비만으로 실패 없이 집빵을 만들고 싶다면?</div>
          <div>
            <div className="curriTitle" id="curriculum">
              커리큘럼
            </div>
            <div>
              <div className="curriList">
                <i className="fa-regular fa-circle-play" />
                <span> 0. Intro</span>
              </div>
              <div className="curriList">
                <i className="fa-regular fa-circle-play" />
                <span> 1. 생크림모닝빵</span>
              </div>
              <div className="curriList">
                <i className="fa-regular fa-circle-play" />
                <span> 2. 기본 식빵</span>
              </div>
              <div className="curriList">
                <i className="fa-regular fa-circle-play" />
                <span> 3. 마늘빵</span>
              </div>
              <div className="curriList">
                <i className="fa-regular fa-circle-play" />
                <span> 4. 단팥빵</span>
              </div>
              <div className="curriList">
                <i className="fa-regular fa-circle-play" />
                <span> 5. 찹쌀도넛</span>
              </div>
              <div className="curriList">
                <i className="fa-regular fa-circle-play" />
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
              <textarea
                className="reviewInputBox"
                type="text"
                placeholder="수강평을 10자 이상 작성해주세요."
                onChange={handleComment}
                value={comment}
              />
              <button
                className="enrollBtn"
                onClick={saveComment}
                disabled={valid}
              >
                등록
              </button>
            </div>
            <div className="commentSort">
              <span className="commentSortView">View</span>
              <span className="commentSortView">최신 순</span>
              <span className="commentSortView">좋아요 순</span>
              <span className="commentSortView">높은평점 순</span>
              <span className="commentSortView">낮은평점 순</span>
            </div>

            {commentList.map((comment, key) => {
              return (
                <div key={key} className="commentList">
                  <div className="commentInfo">
                    <img
                      src={productData.profileImg}
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
          <div className="qna">
            <div id="qna">자주하는 질문</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

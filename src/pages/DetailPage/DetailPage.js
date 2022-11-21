import React, { useState, useEffect } from 'react';
import { json, Link, Navigate } from 'react-router-dom';
import './DetailPage.scss';

const DetailPage = () => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [productData, setProductData] = useState([]);

  const handleComment = e => {
    setComment(e.target.value);
  };

  const saveComment = () => {
    setCommentList([...commentList, comment]);
    setComment('');

    // 주소API 통신
    // fetch('API주소', {
    //   body: JSON.stringify({
    //     product_id: productData.id,
    //     댓글, 별점,
    //   })
    // })
  };

  const valid = comment.length >= 10 ? false : true;

  console.log(productData.id);

  useEffect(() => {
    fetch('http:10.58.52.59:3002/lectures/2')
      .then(response => response.json())
      .then(data => setProductData(data));
  }, []);

  const inputCart = () => {
    // 백엔드 통신시 사용
    // if (userToken) {
    //http://10.58.52.59:3002/cart/${productData.id}
    fetch(`http://10.58.52.59:3002/cart/${productData.id}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTY2OTAyMDc2OCwiZXhwIjoxNjY5MTA3MTY4fQ.vXhdWClrF7s7qFS2qTxohDm4ntY73WNGjdn1h5wEV-U',
      },
      body: JSON.stringify({
        product_id: productData.id,
        quantity: productData.quantity,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.status == 201) {
          alert('장바구니에 담겼습니다');
          Navigate('/shoppingcart');
        } else {
          alert('다시 시도해주세요');
        }
      });
  };
  // } else {
  //   alert('로그인 페이지로 이동합니다!');
  // }

  // fetch('http://10.58.52.59:3002/cart/3', {
  //   method: 'post',
  //   body: JSON.stringify(), //body는 JSON으로 바꿔서 보낸다
  //   headers: {
  //     'Content-Type': 'application/json;charset=utf-8',
  //     authorization:
  //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTY2ODg0MDY1MSwiZXhwIjoxNjY4OTI3MDUxfQ.scegPgvD5NXd350VLCKi8SzRK9_JfBNWeAsjMEETVNw',
  //     // authorization: localStorage.getItem('token'),
  //   },
  // })
  //   .then(response => response.json()) //요청
  //   .then(data => console.log(data)); //응답
  // };

  console.log(productData);

  // http:10.58.52.59:3002/lectures/2
  // http://10.58.52.98:3002/lectures/1
  //../../data/detailPageData.json

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
            <button className="lectureHashTag">한식</button>
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
            자주하는 질문
          </a>
        </nav>
        <form className="payForm">
          <div>{productData.price}원</div>
          <div className="payFormBtns">
            <button className="payBtn">바로 수강하기</button>
            <button onClick={inputCart} className="cartBtn">
              장바구니 담기
            </button>
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
          <img src={productData.description} alt="img" />
          {/* <div>
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
          </div> */}
          <div className="review">
            <div className="reviewTitle" id="review">
              수강평
            </div>
            <div className="reviewSubTitle">직접 작성하신 수강평입니다.</div>
            <div className="inputBox">
              <div className="ratingStar">
                <div className="ratingBackGroundImg">
                  <div
                    className="rating"
                    style={{ width: `${productData.rate}*20%` }}
                  />
                </div>
              </div>
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
            <div id="qna" className="lectureQnaTitle">
              자주하는 질문
            </div>
            <div>
              <div className="lectureQnaQuestion">
                수강기간은 언제까지인가요?
              </div>
              <div className="lectureQnaAnswer">
                - P!CKEAT에서 제공하는 동영상 강의들은 각각의 수강기간이
                책정되어 있습니다. 강좌별로 확인부탁드립니다.
              </div>

              <div className="lectureQnaQuestion">
                동영상 강의의 경우 이수증이 있나요?
              </div>
              <div className="lectureQnaAnswer">
                - 동영상 강의를 기간 내에 완강하시면 이수증이 발급됩니다. 강의
                종료 후 1주일 이내에 자동으로 발급됩니다.
              </div>

              <div className="lectureQnaQuestion">
                오프라인 수업의 경우 결석하면 환불이 되나요?
              </div>
              <div className="lectureQnaAnswer">
                - 오프라인 강의 특성상 결석하면 따로 환불이나 보강이 없습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

import './Main.scss';
import { useState, useEffect } from 'react';
import BastLecture from './components/BastLecture';

const Main = () => {
  const [bastLectureList, setBastLectureList] = useState([]);

  useEffect(() => {});
  fetch('data/bastLecture.json', { method: 'GET' })
    .then(rspons => rspons.json())
    .then(data => {
      setBastLectureList(data);
    }, []);

  return (
    <div className="mainBody">
      <div className="mainColorBox">
        <div className="colorBoxContent">
          <p className="colorBoxText">
            인터넷 요리강의 No.1{' '}
            <span>
              <i class="fa-solid fa-egg" />
              P!CKEAT
            </span>
            에서
            <p className="colorBoxText2">원하는 강의를 찾아보세요!</p>
          </p>
          <input className="colorBoxInput" placeholder="음식검색하기..." />
          <i class="fa-solid fa-magnifying-glass fa-lg" />
          <ul className="colorBoxHash">
            <li>
              <p>#짜장면</p>
            </li>
            <li>
              <p>#불고기</p>
            </li>
            <li>
              <p>#김치</p>
            </li>
            <li>
              <p>#스시</p>
            </li>
          </ul>
        </div>
        <div className="mainImgBox">
          <img className="mainImg" src="images/채소사진.jpg" />
        </div>
      </div>
      <div className="mainHome">
        <p className="popularity">
          <i class="fa-solid fa-egg" />
          P!CKEAT
          <span>
            에서 가장 인기있는 코스강의 <span className="topNumber">TOP5!</span>
          </span>
        </p>
        <div className="bastLecture">
          {bastLectureList.map(lecture => (
            <BastLecture key={lecture.id} lecture={lecture} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;

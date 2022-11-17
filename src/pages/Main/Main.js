import './Main.scss';
import Slideshow from './components/Slideshow/Slideshow';
import { useState, useEffect } from 'react';
import BastLecture from './components/BastLecture/BastLecture';

const Main = () => {
  const [bastLectureList, setBastLectureList] = useState([]);
  const [classReplace, setclassReplace] = useState('slide1');
  const [backColor, setBackColor] = useState('colorBoxColor1');

  useEffect(() => {
    const slideShow = setTimeout(() => {
      if (classReplace == 'slide1') {
        setclassReplace('slide2');
        setBackColor('colorBoxColor2');
      } else if (classReplace == 'slide2') {
        setclassReplace('slide3');
        setBackColor('colorBoxColor3');
      } else if (classReplace == 'slide3') {
        setclassReplace('slide1');
        setBackColor('colorBoxColor1');
      }
    }, 4000);

    return () => clearTimeout(slideShow);
  }, [classReplace]);

  const leftButtonRun = () => {
    if (classReplace == 'slide1') {
      setclassReplace('slide3');
      setBackColor('colorBoxColor3');
    } else if (classReplace == 'slide2') {
      setclassReplace('slide1');
      setBackColor('colorBoxColor1');
    } else if (classReplace == 'slide3') {
      setclassReplace('slide2');
      setBackColor('colorBoxColor2');
    }
  };

  const leftRightRun = () => {
    if (classReplace == 'slide1') {
      setclassReplace('slide2');
      setBackColor('colorBoxColor2');
    } else if (classReplace == 'slide2') {
      setclassReplace('slide3');
      setBackColor('colorBoxColor3');
    } else if (classReplace == 'slide3') {
      setclassReplace('slide1');
      setBackColor('colorBoxColor1');
    }
  };
  // useEffect(() => {
  //   fetch('http://10.58.52.98:3002/lectures')
  //     .then(rspons => rspons.json())
  //     .then(data => {
  //       setBastLectureList(data);
  //     });
  // }, []);

  useEffect(() => {
    fetch('data/bastLecture.json')
      .then(rspons => rspons.json())
      .then(data => {
        setBastLectureList(data);
      });
  }, []);
  return (
    <div className="mainBody">
      <div className={`mainColorBox ${backColor}`}>
        <div className="colorBoxContent">
          <p className="colorBoxText">
            인터넷 요리강의 No.1{' '}
            <span className="siteName">
              <i className="fa-solid fa-egg" />
              P!CKEAT
            </span>
            에서
            <p className="colorBoxText2">원하는 강의를 찾아보세요!</p>
          </p>
          <div className="colorBoxIneer">
            <input className="colorBoxInput" placeholder="음식검색하기..." />
            <i class="fa-solid fa-magnifying-glass fa-lg" />
          </div>
          <ul className="colorBoxHash">
            <li className="hashTag">
              <p>#짜장면</p>
            </li>
            <li className="hashTag">
              <p>#불고기</p>
            </li>
            <li className="hashTag">
              <p>#김치</p>
            </li>
            <li className="hashTag">
              <p>#스시</p>
            </li>
          </ul>
        </div>
        <div className="slideShowBody">
          <div className="slideShowContents">
            <i class="fa-solid fa-chevron-left fa-2x" onClick={leftButtonRun} />
            <Slideshow classReplace={classReplace} />
            <i class="fa-solid fa-chevron-right fa-2x" onClick={leftRightRun} />
          </div>
        </div>
      </div>
      <div className="mainHome">
        <p className="popularity">
          <i className="fa-solid fa-egg" />
          P!CKEAT
          <span className="popularityText">
            에서 가장 인기있는 코스강의{' '}
            <span className="topNumber">TOP5! 👍</span>
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

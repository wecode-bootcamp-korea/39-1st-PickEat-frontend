import './Main.scss';
import Slideshow from './components/Slideshow/Slideshow';
import { useState, useEffect, useRef } from 'react';
import BastLecture from './components/BastLecture/BastLecture';
import FreeLecture from './components/freeLecture/FreeLecture';

const Main = () => {
  const [bastLectureList, setBastLectureList] = useState([]);
  const [freeLectureList, setFreeLectureList] = useState([]);
  const [slideImgList, setSlideImgList] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [freeLectureIndex, setFreeLectureIndex] = useState(0);
  const [backColor, setBackColor] = useState('colorBoxColor1');
  const freeLectureRef = useRef(null);

  const slide = () => {
    if (slideIndex === slideImgList.length - 1) {
      setSlideIndex(0);
      setBackColor('colorBoxColor1');
    } else {
      setSlideIndex(value => value + 1);
      setBackColor(`colorBoxColor${1 * (slideIndex + 2)}`);
    }
  };
  const leftSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(slideImgList.length - 1);
      setBackColor('colorBoxColor5');
    } else {
      setSlideIndex(value => value - 1);
      setBackColor(`colorBoxColor${slideIndex + 1 - 1}`);
    }
  };

  const rightfreeLectureSlide = () => {
    if (freeLectureIndex === 2) {
      setFreeLectureIndex(0);
    } else {
      setFreeLectureIndex(value => value + 1);
    }
  };

  const leftfreeLectureSlide = () => {
    if (freeLectureIndex === 0) {
      setFreeLectureIndex(2);
    } else {
      setFreeLectureIndex(value => value - 1);
    }
  };

  useEffect(() => {
    freeLectureRef.current.style.transform = `translateX(-${
      freeLectureIndex * 1083
    }px)`;
  }, [freeLectureIndex]);

  useEffect(() => {
    const slideShow = setTimeout(() => {
      slide();
    }, 5000);

    return () => clearTimeout(slideShow);
  }, [slideIndex]);

  useEffect(() => {
    fetch('data/slidedata.json')
      .then(respons => respons.json())
      .then(data => {
        setSlideImgList(data);
      });
  }, []);
  useEffect(() => {
    fetch('data/bastLecture.json')
      .then(response => response.json())
      .then(data => {
        setBastLectureList(data);
      });
  }, []);

  useEffect(() => {
    fetch('data/freeLecture.json')
      .then(response => response.json())
      .then(data => {
        setFreeLectureList(data);
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
            <i class="fa-solid fa-chevron-left fa-2x" onClick={leftSlide} />
            <Slideshow
              slideImgList={slideImgList}
              slideIndex={slideIndex}
              setSlideIndex={setSlideIndex}
              setBackColor={setBackColor}
            />
            <i class="fa-solid fa-chevron-right fa-2x" onClick={slide} />
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

        <p className="popularity">
          <span className="popularityText">
            한번에 하나씩 단과강의 찍먹하기! 🍴
            <i class="fa-solid fa-fork" />
          </span>
        </p>
        <div className="freeLectureBody">
          <i
            class="fa-solid fa-chevron-left fa-3x"
            onClick={leftfreeLectureSlide}
          />
          <div className="freeLecture">
            <ul className="lecturesSlide" ref={freeLectureRef}>
              {freeLectureList.map(lecture => (
                <FreeLecture key={lecture.id} lecture={lecture} />
              ))}
            </ul>
          </div>
          <i
            class="fa-solid fa-chevron-right fa-3x"
            onClick={rightfreeLectureSlide}
          />
        </div>
      </div>
      <div className="mainUnder">
        <div className="mainUnderText">
          <p className="mainUnderP">만들고싶은 모든 요리를</p>
          <p className="mainUnderP">
            만날 수 있는{' '}
            <span className="logo">
              <i className="fa-solid fa-egg" />
              P!CKEAT
            </span>
          </p>
          <p className="mainUnderNetxP">
            누적 거래수 0 건! 5 개의 카테고리, 20개의 서비스에서 여러분에게
            필요한 모든 요리를 만나보세요.
          </p>
        </div>
        <img className="mainUnderImg" src="https://ifh.cc/g/MJylHH.jpg" />
      </div>
      <div className="mainUnderBar">
        <div className="underBars">
          <p className="underBarsNumber">01</p>
          <p className="underBarsText1">5개국의 요리전문가</p>
          <p className="underBarsText2">
            최고의 전문가가 수업을 이끌어나갑니다
          </p>
          <p className="underBarsText3">40년간 쌓아온 노하우와 팁들을</p>
          <p className="underBarsText4">막힘없이 알려줘요!</p>
        </div>
        <div className="underBars">
          <p className="underBarsNumber">02</p>
          <p className="underBarsText1">안전한 에스크로 결제</p>
          <p className="underBarsText2">소중한 내 돈, 걱정되지 않나요?</p>
          <p className="underBarsText3">에스크로 결제 시스템으로</p>
          <p className="underBarsText4">안전하게 보호해드려요!</p>
        </div>
        <div className="underBars">
          <p className="underBarsNumber">03</p>
          <p className="underBarsText1">만족스러운 결과물</p>
          <p className="underBarsText2">평균 만족도 100점! 분야별 전문가가</p>
          <p className="underBarsText4">만족스러운 결과물을 제공합니다.</p>
        </div>
      </div>
      <div className="main"></div>
    </div>
  );
};

export default Main;

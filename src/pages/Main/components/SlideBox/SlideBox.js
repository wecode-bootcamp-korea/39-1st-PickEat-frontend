import { useEffect } from 'react';
import Slideshow from '../Slideshow/Slideshow';

const SlideBox = props => {
  const { slideImgList, slideIndex, setSlideIndex, backColor, setBackColor } =
    props;

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

  useEffect(() => {
    const slideShow = setTimeout(() => {
      slide();
    }, 3000);

    return () => clearTimeout(slideShow);
  }, [slideIndex]);
  return (
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
  );
};

export default SlideBox;

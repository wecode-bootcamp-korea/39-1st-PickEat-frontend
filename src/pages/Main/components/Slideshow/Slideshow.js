import { useEffect, useRef } from 'react';

const Slideshow = props => {
  const { slideImgList, slideIndex, setSlideIndex, setBackColor } = props;

  const slideRef = useRef(null);
  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${slideIndex * 550}px)`;
  }, [slideIndex]);
  return (
    <div className="mainImgconta">
      <div className="mainImgBox">
        <div className="slide1" ref={slideRef}>
          {slideImgList.map((slide, index) => (
            <img key={index} className="mainImg" src={slide.img} />
          ))}
        </div>
      </div>
      <div className="slideShowChckeBox">
        {slideImgList.map((checkBar, index) => (
          <input
            className="slideCheck"
            key={index}
            type="radio"
            checked={slideIndex === index}
            onClick={e => {
              setSlideIndex(index);
              setBackColor(`colorBoxColor${index + 1}`);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;

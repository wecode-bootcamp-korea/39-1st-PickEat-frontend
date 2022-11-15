import './Main.scss';

const Main = () => {
  return (
    <div className="mainBody">
      <div className="mainColorBox">
        <div className="colorBoxContent">
          <p className="colorBoxText">
            인터넷 요리강의 No.1 <span>P!CKEAT</span>에서
          </p>
        </div>
        <div className="mainImgBox">
          <img className="mainImg" src="images/채소사진.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Main;

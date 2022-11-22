import { Link } from 'react-router-dom';
import './Lectures.scss';
const Lectures = props => {
  const { lectureList } = props;
  const lectureType =
    lectureList.type === '코스강의' ? 'ratingTag' : 'ratingTag1';

  return (
    <li className="slideLectures">
      <Link className="linkTag" to="">
        <img className="LectureThumbnail" src={lectureList.image} />
        <p className="lecturetitle">{lectureList.title}</p>
      </Link>
      <div className="lecturePremium">
        <p className={lectureType}>
          P!CKEAT<span className="ratingTagContent">{lectureList.type}</span>
        </p>
        <p className="viewerTag">+{lectureList.viewer}명</p>
        <p className="hotTag">{lectureList.hot}</p>
      </div>
      <div className="scope">
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <span className="reviewNumber">(100)</span>
      </div>
      <div className="price">
        <p>{lectureList.price}</p>
      </div>
    </li>
  );
};

export default Lectures;

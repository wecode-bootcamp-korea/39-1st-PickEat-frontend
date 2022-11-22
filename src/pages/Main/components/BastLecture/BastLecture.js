import { Link } from 'react-router-dom';
import './BastLecture.scss';

const BastLecture = props => {
  const { lecture } = props;
  return (
    <div className="lectures">
      <Link to="">
        <img className="LectureThumbnail" src={lecture.image} />
        <p className="lecturetitle">{lecture.title}</p>
      </Link>
      <div className="lecturePremium">
        <p className="ratingTag">
          P!CKEAT<span className="ratingTagContent">{lecture.type}</span>
        </p>
        <p className="viewerTag">+1000명</p>
        <p className="hotTag">🔥</p>
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
        <p>{lecture.price}</p>
      </div>
    </div>
  );
};

export default BastLecture;

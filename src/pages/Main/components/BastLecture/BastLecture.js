import { Link } from 'react-router-dom';
import './BastLecture.scss';

const BastLecture = props => {
  const { lecture } = props;
  return (
    <div className="lectures">
      <Link to="">
        <img className="LectureThumbnail" src={lecture.img} />
        <p className="lecturetitle">{lecture.title}</p>
      </Link>
      <div className="lecturePremium">
        <p className="ratingTag">
          P!CKEAT<span className="ratingTagContent">{lecture.type}</span>
        </p>
        <p className="viewerTag">+{lecture.viewer}명</p>
        <p className="hotTag">{lecture.hot}</p>
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

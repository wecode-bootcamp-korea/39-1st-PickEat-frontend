import { Link } from 'react-router-dom';
import './FreeLecture.scss';
const FreeLecture = props => {
  const { lecture } = props;
  const price = lecture.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <li className="slideLectures">
      <Link to="">
        <img className="LectureThumbnail" src={lecture.image} />
        <p className="lecturetitle">{lecture.title}</p>
      </Link>
      <div className="lecturePremium">
        <p className="ratingTag1">
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
        <p>{price}</p>
      </div>
    </li>
  );
};

export default FreeLecture;

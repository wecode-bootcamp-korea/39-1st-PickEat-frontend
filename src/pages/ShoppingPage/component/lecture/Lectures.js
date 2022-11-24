import { Link } from 'react-router-dom';
import './Lectures.scss';
const Lectures = props => {
  const { lectureList } = props;
  const lectureType =
    lectureList.type === '요리도구' ? 'ratingTag2' : 'ratingTag1';
  const price = lectureList.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <li className="slideLectures">
      <Link className="linkTag" to={`/productdetailpage/${lectureList.id}`}>
        <img className="LectureThumbnail" src={lectureList.image} />
        <p className="lecturetitle">{lectureList.title}</p>
      </Link>
      <div className="lecturePremium">
        <p className={lectureType}>
          P!CKEAT<span className="ratingTagContent">{lectureList.type}</span>
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

export default Lectures;

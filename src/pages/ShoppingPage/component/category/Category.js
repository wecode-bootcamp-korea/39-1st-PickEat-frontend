import './Category.scss';

const Category = props => {
  const { category, setSearchLectureInput } = props;

  const categoryClick = e => {
    if (e.target.id == 1) {
      setSearchLectureInput('국자');
    } else if (e.target.id == 2) {
      setSearchLectureInput('냄비');
    } else if (e.target.id == 3) {
      setSearchLectureInput('와인잔');
    } else if (e.target.id == 4) {
      setSearchLectureInput('그릇');
    } else if (e.target.id == 5) {
      setSearchLectureInput('머그컵');
    }
  };

  return (
    <div className="categoryes">
      <button onClick={categoryClick} id={category.id} type="checkBox">
        {category.titleName}{' '}
      </button>
    </div>
  );
};

export default Category;

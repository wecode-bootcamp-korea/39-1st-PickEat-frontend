import './Category.scss';

const Category = props => {
  const { category, setSearchLectureInput } = props;

  const categoryClick = e => {
    if (e.target.id == 1) {
      setSearchLectureInput('한식');
    } else if (e.target.id == 2) {
      setSearchLectureInput('중식');
    } else if (e.target.id == 3) {
      setSearchLectureInput('일식');
    } else if (e.target.id == 4) {
      setSearchLectureInput('양식');
    } else if (e.target.id == 5) {
      setSearchLectureInput('멕시칸');
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

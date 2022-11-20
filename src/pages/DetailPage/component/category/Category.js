import './Category.scss';

const Category = props => {
  const { category } = props;
  return (
    <div className="categoryes">
      <p>{category.titleName}</p>
    </div>
  );
};

export default Category;

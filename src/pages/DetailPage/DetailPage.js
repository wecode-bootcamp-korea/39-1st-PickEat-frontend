import './DetailPage.scss';
import { useEffect, useState } from 'react';
import Category from './component/category/Category.js';

const DetailPage = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch('/data/categoryData.json')
      .then(response => response.json())
      .then(data => {
        setCategoryData(data);
      });
  }, []);
  console.log(categoryData);
  return (
    <div className="categoryPageBody">
      <div className="categoryBody">
        <div className="searchCategoryBody">
          <input className="searchCategory" placeholder="음식검색" />
          <div className="searchCategoryIcon">
            <i class="fa-solid fa-magnifying-glass fa-lg" />
          </div>
        </div>
        {categoryData.map(category => (
          <Category key={category.id} category={category} />
        ))}
      </div>
      <div className="categoryContentBody">
        <div>dasd</div>
      </div>
    </div>
  );
};

export default DetailPage;

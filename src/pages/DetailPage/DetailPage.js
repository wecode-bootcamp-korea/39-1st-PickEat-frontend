import './DetailPage.scss';
import { useEffect, useState } from 'react';
import Category from './component/category/Category.js';
import Lectures from './component/lecture/Lectures';

const DetailPage = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    fetch('/data/categoryData.json')
      .then(response => response.json())
      .then(data => {
        setCategoryData(data);
      });
  }, []);

  useEffect(() => {
    fetch('/data/freeLecture.json')
      .then(response => response.json())
      .then(data => {
        setLectures(data);
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
        {lectures.map(lectureList => (
          <Lectures key={lectureList.id} lecture={lectures} />
        ))}
      </div>
    </div>
  );
};

export default DetailPage;

import './DetailPage.scss';
import { useEffect, useState } from 'react';
import Category from './component/category/Category.js';
import Lectures from './component/lecture/Lectures';

const DetailPage = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [lectures, setLectures] = useState([]);
  const [searchLectureInput, setSearchLectureInput] = useState('');

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

  const saveValue = e => {
    setSearchLectureInput(e.target.value);
  };

  const searchLectures = lectures.filter(lecture =>
    lecture.title.includes(searchLectureInput)
  );
  console.log(searchLectures);
  return (
    <div className="categoryPageBody">
      <div className="categoryBody">
        <div className="allcategoryBody">
          <p className="allcategory">전체</p>
        </div>
        <div className="categoryContents">
          <div className="searchCategoryBody">
            <input
              className="searchCategory"
              placeholder="음식검색"
              onChange={saveValue}
              value={searchLectureInput}
            />
            <div className="searchCategoryIcon">
              <i class="fa-solid fa-magnifying-glass fa-lg" />
            </div>
          </div>
          {categoryData.map(category => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </div>
      <div className="categoryContentBody">
        {searchLectures.map(lectureList => (
          <Lectures key={lectureList.id} lectureList={lectureList} />
        ))}
      </div>
    </div>
  );
};

export default DetailPage;

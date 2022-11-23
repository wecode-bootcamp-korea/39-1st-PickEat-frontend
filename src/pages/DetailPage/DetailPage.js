import React, { useState } from 'react';
import './DetailPage.scss';
import { useEffect, useState } from 'react';
import Category from './component/category/Category.js';
import Lectures from './component/lecture/Lectures';

const DetailPage = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [lectures, setLectures] = useState([]);
  const [searchLectureInput, setSearchLectureInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

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

  const deleteValue = () => {
    setSearchLectureInput('');
  };

  const searchLectures = lectures.filter(lecture =>
    lecture.title.includes(searchLectureInput)
  );

  const clearAll =
    searchLectureInput.length > 0
      ? 'fa-solid fa-xmark fa-lg'
      : 'fa-solid fa-magnifying-glass fa-lg';

  const changeColor =
    searchLectureInput.length > 0
      ? 'searchCategoryIconX'
      : 'searchCategoryIcon';

  const dropDown = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const runDrop = isOpen ? 'courseLectureDropsOn' : 'courseLectureDropsOff';

  return (
    <div className="categoryPageBody">
      <div className="categorylaieout">
        <div className="categoryBody">
          <div className="leftCategory">
            <div className="leftCategoryContents1">
              <button className="leftCategoryButton">전체강의</button>
            </div>
            <div className="courseLectureBody">
              <div className="leftCategoryContents2" onClick={dropDown}>
                <button className="leftCategoryButton">코스강의</button>
                <i
                  className={`fa-solid fa-angle-${isOpen ? 'down' : 'right'}`}
                />
              </div>
              <div className={runDrop}>
                <div className="courseLectureContents">
                  <button>한식</button>
                </div>
                <div className="courseLectureContents">
                  <button>중식</button>
                </div>
                <div className="courseLectureContents">
                  <button>일식</button>
                </div>
                <div className="courseLectureContents">
                  <button>양식</button>
                </div>
                <div className="courseLectureContents">
                  <button>멕시칸</button>
                </div>
              </div>
            </div>
            <div className="leftCategoryContents3">
              <button className="leftCategoryButton">단과강의</button>
              <i className="fa-solid fa-angle-right" />
            </div>
          </div>
          <div className="allcategoryBody">
            <p className="allcategory">전체</p>
          </div>
          <div className="categoryContents">
            <div className="searchCategoryBody">
              <input
                className="searchCategory"
                placeholder="음식검색..."
                onChange={saveValue}
                value={searchLectureInput}
              />
              <div className={changeColor} onClick={deleteValue}>
                <i className={clearAll} />
              </div>
            </div>
            {categoryData.map(category => (
              <Category
                key={category.id}
                category={category}
                setSearchLectureInput={setSearchLectureInput}
              />
            ))}
          </div>
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

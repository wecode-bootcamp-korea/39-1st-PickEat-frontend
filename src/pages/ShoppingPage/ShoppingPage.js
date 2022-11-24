import './ShoppingPage.scss';
import { useEffect, useState } from 'react';
import Category from './component/category/Category.js';
import Lectures from './component/lecture/Lectures';

const ShoppingPage = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [cookwares, setCookware] = useState([]);
  const [searchCookwareInput, setSearchCookwareInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const saveValue = e => {
    setSearchCookwareInput(e.target.value);
  };

  const deleteValue = () => {
    setSearchCookwareInput('');
  };

  const searchLectures = cookwares.filter(lecture =>
    lecture.title.includes(searchCookwareInput)
  );

  const clearAll =
    searchCookwareInput.length > 0
      ? 'fa-solid fa-xmark fa-lg'
      : 'fa-solid fa-magnifying-glass fa-lg';

  const changeColor =
    searchCookwareInput.length > 0
      ? 'searchCategoryIconX'
      : 'searchCategoryIcon';

  const dropDown = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const dropDown2 = () => {
    isOpen2 ? setIsOpen2(false) : setIsOpen2(true);
  };

  const runDrop = isOpen ? 'courseLectureDropsOn' : 'courseLectureDropsOff';
  const runDrop2 = isOpen2 ? 'courseLectureDropsOn' : 'courseLectureDropsOff';

  const allLectures = () => {
    fetch('http://10.58.52.158:3002/products?type=요리도구')
      .then(response => response.json())
      .then(data => setCookware(data));
  };

  useEffect(() => {
    fetch('/data/categoryData.json')
      .then(response => response.json())
      .then(data => {
        setCategoryData(data);
      });
  }, []);

  useEffect(() => {
    fetch('http://10.58.52.158:3002/products?type=요리도구')
      .then(response => response.json())
      .then(data => {
        setCookware(data);
      });
  }, []);

  return (
    <div className="categoryPageBody">
      <div className="categorylaieout">
        <div className="categoryBody">
          <div className="leftCategory">
            <div className="leftCategoryContents1">
              <button className="leftCategoryButton" onClick={allLectures}>
                전체상품
              </button>
            </div>
            <div className="courseLectureBody">
              <div className="leftCategoryContents2" onClick={dropDown}>
                <button className="leftCategoryButton">조리도구</button>
                <i
                  className={`fa-solid fa-angle-${isOpen ? 'down' : 'right'}`}
                />
              </div>
              <div className={runDrop}>
                <div
                  onClick={() => {
                    fetch(
                      'http://10.58.52.158:3002/products?name=한식&type=코스강의'
                    )
                      .then(response => response.json())
                      .then(data => setCookware(data));
                  }}
                  className="courseLectureContents"
                >
                  <button>후라이팬</button>
                </div>
                <div
                  onClick={() => {
                    fetch(
                      'http://10.58.52.158:3002/products?name=중식&type=코스강의'
                    )
                      .then(response => response.json())
                      .then(data => setCookware(data));
                  }}
                  className="courseLectureContents"
                >
                  <button>냄비</button>
                </div>
                <div
                  onClick={() => {
                    fetch(
                      'http://10.58.52.158:3002/products?name=일식&type=코스강의'
                    )
                      .then(response => response.json())
                      .then(data => setCookware(data));
                  }}
                  className="courseLectureContents"
                >
                  <button>뒤집개</button>
                </div>
                <div
                  onClick={() => {
                    fetch(
                      'http://10.58.52.158:3002/products?name=양식&type=코스강의'
                    )
                      .then(response => response.json())
                      .then(data => setCookware(data));
                  }}
                  className="courseLectureContents"
                >
                  <button>부엌칼</button>
                </div>
                <div
                  onClick={() => {
                    fetch(
                      'http://10.58.52.158:3002/products?name=멕시코&type=코스강의'
                    )
                      .then(response => response.json())
                      .then(data => setCookware(data));
                  }}
                  className="courseLectureContents"
                >
                  <button>국자</button>
                </div>
              </div>
            </div>
            <div className="leftCategoryContents3" onClick={dropDown2}>
              <button className="leftCategoryButton">식기</button>
              <i
                className={`fa-solid fa-angle-${isOpen2 ? 'down' : 'right'}`}
              />
            </div>
            <div className={runDrop2}>
              <div
                onClick={() => {
                  fetch(
                    'http://10.58.52.158:3002/products?name=한식&type=단과강의'
                  )
                    .then(response => response.json())
                    .then(data => setCookware(data));
                }}
                className="courseLectureContents"
              >
                <button>접시</button>
              </div>
              <div
                onClick={() => {
                  fetch(
                    'http://10.58.52.158:3002/products?name=중식&type=단과강의'
                  )
                    .then(response => response.json())
                    .then(data => setCookware(data));
                }}
                className="courseLectureContents"
              >
                <button>와인잔</button>
              </div>
              <div
                onClick={() => {
                  fetch(
                    'http://10.58.52.158:3002/products?name=일식&type=단과강의'
                  )
                    .then(response => response.json())
                    .then(data => setCookware(data));
                }}
                className="courseLectureContents"
              >
                <button>머그컵</button>
              </div>
              <div
                onClick={() => {
                  fetch(
                    'http://10.58.52.158:3002/products?name=양식&type=단과강의'
                  )
                    .then(response => response.json())
                    .then(data => setCookware(data));
                }}
                className="courseLectureContents"
              >
                <button>숫가락</button>
              </div>
              <div
                onClick={() => {
                  fetch(
                    'http://10.58.52.158:3002/products?name=멕시코&type=단과강의'
                  )
                    .then(response => response.json())
                    .then(data => setCookware(data));
                }}
                className="courseLectureContents"
              >
                <button>젓가락</button>
              </div>
            </div>
          </div>
          <div className="allcategoryBody">
            <p className="allcategory">전체</p>
          </div>
          <div className="categoryContents">
            <div className="searchCategoryBody">
              <input
                className="searchCategory"
                placeholder="상품검색..."
                onChange={saveValue}
                value={searchCookwareInput}
              />
              <div className={changeColor} onClick={deleteValue}>
                <i className={clearAll} />
              </div>
            </div>
            {categoryData.map(category => (
              <Category
                key={category.id}
                category={category}
                setSearchLectureInput={setSearchCookwareInput}
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

export default ShoppingPage;

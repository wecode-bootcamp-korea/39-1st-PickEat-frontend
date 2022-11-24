// import React, { useEffect, useState } from 'react';
// import './TopBtn.scss';

// function topBtn() {
//   const [scrollBtn, setScrollBtn] = useState(false);

//   const scrollTop = () => {
//     window.scroll({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   useEffect(() => {
//     const showBtn = () => {
//       if (window.scrollY > 500) {
//         setScrollBtn(true);
//       } else {
//         setScrollBtn(false);
//       }
//     };
//     window.addEventListener('scroll', showBtn);
//     return () => {
//       window.removeEventListener('scroll', showBtn);
//     };
//   }, []);
//   return (
//     scrollBtn && (
//       <div className="top_btn">
//         <button id="top" onClick={scrollTop} type="button">
//           TOP
//         </button>
//       </div>
//     )
//   );
// }
// export default topBtn;

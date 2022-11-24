import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import UserForm from './pages/UserForm/UserForm';
import DetailPage from './pages/DetailPage/DetailPage';
import LectureDetailPage from './pages/DetailPage/LectureDetailPage';
import ProductDetailPage from './pages/DetailPage/ProductDetailPage';
import Payment from './pages/Payment/Payment';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
// import TopBtn from './components/TopBtn/TopBtn';
import Footer from './components/Footer/Footer';
import Signup from './pages/Signup/Signup';
import Terms from './pages/Terms/Terms';
import NavBar from './components/NavBar/NavBar';
import Login from './pages/Login/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/detailpage" element={<DetailPage />} />
        <Route path="/lecturedetailpage" element={<LectureDetailPage />} />
        <Route path="/productdetailpage" element={<ProductDetailPage />} />
        <Route path="/productdetailpage/:id" element={<ProductDetailPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        {/* <Route path="/Footer" element={<Footer />} /> */}
      </Routes>
      <Footer />
      {/* <TopBtn /> */}
    </BrowserRouter>
  );
};

export default Router;

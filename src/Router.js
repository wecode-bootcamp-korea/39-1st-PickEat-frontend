import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import DetailPage from './pages/DetailPage/DetailPage';
import ProductDetailPage from './pages/DetailPage/ProductDetailPage';
import Payment from './pages/Payment/Payment';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import SignUp from './pages/SignUp/SignUp';
import NavBar from './components/NavBar/NavBar';

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detailpage" element={<DetailPage />} />
        <Route path="/productdetailpage" element={<ProductDetailPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

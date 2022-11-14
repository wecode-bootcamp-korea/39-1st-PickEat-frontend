import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import DetailPage from './pages/DetailPage/DetailPage';
import Payment from './pages/Payment/Payment';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import SignUp from './pages/SignUp/SignUp';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/DetailPage" element={<DetailPage />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

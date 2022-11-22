import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import UserForm from './pages/Login/UserForm';
import DetailPage from './pages/DetailPage/DetailPage';
import Payment from './pages/Payment/Payment';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Footer from './components/Footer/Footer';
import Signup from './pages/Login/components/Signup/Signup';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<UserForm />} />
        <Route path="/detailpage" element={<DetailPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

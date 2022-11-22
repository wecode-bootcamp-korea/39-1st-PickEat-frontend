// import React, { useState } from 'react';
import React from 'react';
// // import { useDispatch } from 'react-redux';
// import { loginUser } from '../../UserForm';
// import { Navigate } from 'react-router-dom';
import './Login.scss';

export default function Login({ setFormTitle }) {
  // const dispatch = useDispatch();

  // const [Email, setEmail] = useState('');
  // const [Password, setPassword] = useState('');

  // const onEmailHandle = e => {
  //   setEmail(e.currentTarget.value);
  // };
  // const onPasswordHandle = e => {
  //   setPassword(e.currentTarget.value);
  // };
  // const onSubmitHandle = e => {
  //   e.preventDefault();
  // };

  return (
    <>
      <header>
        <p className="login-contain">로그인</p>
      </header>
      <div className="login-id-pw">
        <input
          type="text"
          name="email"
          className="text-file-id"
          placeholder="이메일"
          // onChange={onEmailHandle}
        />
        <input
          type="password"
          name="pw"
          className="text-file-pw"
          placeholder="비밀번호"
          // onChange={onPasswordHandle}
        />
      </div>
      <label className="state-input">
        <input
          type="checkbox"
          name="state"
          className="login-state"
          placeholder="로그인상태유지"
        />
        <span className="blackCheck">로그인상태유지</span>
      </label>
      <button className="push-btn">로그인</button>
      <div className="login-id-pw-input">
        <p
          className="login-link"
          onClick={() => {
            setFormTitle('terms');
          }}
        >
          회원가입
        </p>
        <a className="id-pw-link">아이디 · 비밀번호 찾기</a>
      </div>
      <div className="or-text">
        <div className="border-left" />
        "또는"
        <div className="border-light" />
      </div>
      <div className="shopping-tax">
        <button className="shopping">비회원 주문배송 조회</button>
      </div>
      <div className="kakao-login">
        <button className="kakao">
          <i className="fas fa-comment" /> kakao 로그인
        </button>
      </div>
      <div className="close-btn">
        <button className="closeBtn">
          <i className="btl bt-times" />
        </button>
      </div>
    </>
  );
}

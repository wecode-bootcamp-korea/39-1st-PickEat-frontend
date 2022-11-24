import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

export default function Login({ setFormTitle }) {
  const [inputId, setInputId] = useState('');
  const [inputPwd, setInputPwd] = useState('');

  const navigate = useNavigate();

  const onInputId = e => {
    setInputId(e.currentTarget.value);
  };
  const onInputPwd = e => {
    setInputPwd(e.currentTarget.value);
  };
  // const onInputSumit = e => {
  //   e.preventDefault();
  // };
  const push_btnCheck = e => {
    e.preventDefault();

    fetch('http://10.58.52.59:3002/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ email: inputId, password: inputPwd }),
    })
      .then(response => {
        if (response.status != 200) {
          throw new Error('error');
        }
        return response.json();
      })
      .catch(err => {
        alert('로그인 실패! 아이디 또는 비밀번호를 확인해주세요.');
      })
      .then(data => {
        localStorage.setItem('token', data.accessToken);
        navigate('./main');
      });
  };

  return (
    <div className="login_form">
      <header>
        <p className="login-contain">로그인</p>
      </header>
      <div className="login-id-pw">
        <input
          type="text"
          name="email"
          className="text-file-id"
          placeholder="이메일"
          value={inputId}
          onChange={onInputId}
        />
        <input
          type="password"
          name="pw"
          className="text-file-pw"
          placeholder="비밀번호"
          value={inputPwd}
          onChange={onInputPwd}
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
      <button
        className="push-btn"
        // onChange={onInputSumit}
        onClick={push_btnCheck}
      >
        로그인
      </button>
      <div className="login-id-pw-input">
        <p className="login-link" onClick={() => navigate('/terms')}>
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
        <button className="closeBtn" onClick={() => navigate('/')}>
          <i className="btl bt-times" />
        </button>
      </div>
    </div>
  );
}

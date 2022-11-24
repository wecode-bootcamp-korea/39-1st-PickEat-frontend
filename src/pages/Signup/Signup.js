import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.scss';

export default function Signup({ setFormTitle }) {
  const naviagate = useNavigate();

  const [emailInput, setEmailInput] = useState('');
  const [pwInput, setPwInput] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [nameCheck, setNameCheck] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [disabled, setDisabled] = useState(true);
  const textIdInput = e => {
    setEmailInput(e.target.value);
  };
  const textPwInput = e => {
    setPwInput(e.target.value);
  };
  const textIdPwInput = e => {
    setPwCheck(e.target.value);
  };
  const textNameInput = e => {
    setNameCheck(e.target.value);
  };
  const textPhoneInput = e => {
    setPhoneNum(e.target.value);
  };
  const loginIsValidate = () => {
    emailInput.includes('@') &&
    pwInput.length > 2 &&
    pwCheck.length > 2 === pwInput &&
    nameCheck.length > 2 &&
    phoneNum.length > 9
      ? setDisabled(false)
      : setDisabled(true);
  };

  const btnCheck = () => {
    fetch('http://10.58.52.59:3002/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: emailInput,
        password: pwInput,
        name: nameCheck,
        phoneNumber: phoneNum,
      }),
    })
      .then(response => {
        if (response.status !== 200) {
          throw new Error('회원가입에 실패하였습니다. 다시 회원가입 해주세요');
        } else {
          alert('P!CKEAT 회원가입을 성공하였습니다');
          naviagate('/');
        }
      })

      .catch(error => {
        alert('회원정보를 다시 확인해 주세요.');
      });
  };

  return (
    <div className="login_form">
      <header>
        <p className="sign-contain">회원가입</p>
      </header>

      <div className="sign-id-pw-check">
        <input
          type="text"
          name="email"
          className="text-file-sign-id"
          placeholder="이메일"
          value={emailInput}
          onChange={textIdInput}
          onKeyUp={loginIsValidate}
        />
        <input
          type="password"
          name="pw"
          className="text-file-sign-pw"
          placeholder="비밀번호"
          value={pwInput}
          onChange={textPwInput}
          onKeyUp={loginIsValidate}
        />
        <input
          type="password"
          name="pwcheck"
          className="text-file-pw-check"
          placeholder="비밀번호 확인"
          value={pwCheck}
          onChange={textIdPwInput}
          onKeyUp={loginIsValidate}
        />
      </div>
      <div className="input-name-block">
        <label className="input-name-mini">
          이름
          <i aria-hidden="true" className="icon-req" />
        </label>
        <div className="input-name-form">
          <input
            type="text"
            className="input-name"
            placeholder="이름을(를)입력하세요"
            value={nameCheck}
            onChange={textNameInput}
            onKeyUp={loginIsValidate}
          />
        </div>
        <div className="input-phone-block">
          <label className="input-phone-mini">
            연락처
            <i aria-hidden="true" className="icon-req" />
          </label>
          <div className="input-phone-form">
            <input
              type="text"
              className="input-phone"
              placeholder="연락처(를) 입력하세요"
              value={phoneNum}
              onChange={textPhoneInput}
              onKeyUp={loginIsValidate}
            />
          </div>
          <button
            className="push-join-btn"
            // disabled={disabled}
            onClick={btnCheck}
            // onClick={btnCheck}
          >
            가입하기
          </button>
        </div>
      </div>
      <div className="close-btn">
        <button className="closeBtn" onClick={() => naviagate('/')}>
          <i className="btl bt-times" />
        </button>
      </div>
    </div>
  );
}

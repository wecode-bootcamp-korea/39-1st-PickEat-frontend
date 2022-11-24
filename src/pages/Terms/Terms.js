import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Terms.scss';

export default function Terms({ setFormTitle }) {
  const navigate = useNavigate();
  const [allCheck, setAllCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [privacyCheck, setPrivacyCheck] = useState(false);
  const [marketCheck, setMarketCheck] = useState(false);
  const [smsCheck, setSmsCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);

  const allBtnCheck = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setUseCheck(true);
      setPrivacyCheck(true);
      setMarketCheck(true);
      setSmsCheck(true);
      setEmailCheck(true);
    } else {
      setAllCheck(false);
      setUseCheck(false);
      setPrivacyCheck(false);
      setMarketCheck(false);
      setSmsCheck(false);
      setEmailCheck(false);
    }
  };
  const useBtnCheck = () => {
    if (useCheck === false) {
      setUseCheck(true);
    } else {
      setUseCheck(false);
    }
  };
  const privacyBtnCheck = () => {
    if (privacyCheck === false) {
      setPrivacyCheck(true);
    } else {
      setPrivacyCheck(false);
    }
  };
  const marketBtnCheck = () => {
    if (marketCheck === false) {
      setMarketCheck(true);
    } else {
      setMarketCheck(false);
    }
  };
  const smsBtnCheck = () => {
    if (smsCheck === false) {
      setSmsCheck(true);
    } else {
      setSmsCheck(false);
    }
  };
  const emailBtnCheck = () => {
    if (emailCheck === false) {
      setEmailCheck(true);
    } else {
      setEmailCheck(false);
    }
  };
  useEffect(() => {
    if (
      useCheck === true &&
      privacyCheck === true &&
      marketCheck === true &&
      smsCheck === true &&
      emailCheck === true
    ) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [useCheck, privacyCheck, marketCheck, smsCheck, emailCheck]);
  return (
    <div className="login_form">
      <header>
        <p className="signContain">약관동의</p>
      </header>
      <label className="sign-input-one">
        <input
          type="checkbox"
          name="state"
          className="sign-state-one"
          checked={allCheck}
          onChange={allBtnCheck}
        />
        <span className="signCheck-one">
          이용약관, 개인정보 수집 및 이용에 모두 동의합니다.
        </span>
      </label>
      <label className="sign-input-two">
        <input
          type="checkbox"
          name="state"
          className="sign-state-two"
          checked={useCheck}
          onChange={useBtnCheck}
        />
        <span className="signCheck-two">이용약관 동의</span>
        <span className="two-req">(필수)</span>
      </label>
      <div className="sign-two-text">
        <input
          type="text"
          className="sign-two-textline"
          placeholder="제 1조 목적 본 이용약관은"
        />
      </div>
      <label className="sign-input-three">
        <input
          type="checkbox"
          name="state"
          className="sign-state-three"
          checked={privacyCheck}
          onChange={privacyBtnCheck}
        />
        <span className="signCheck-three">개인정보 수집 및 </span>
        <span className="three-req">(필수)</span>
      </label>
      <div className="sign-three-text">
        <input
          type="text"
          className="sign-three-textline"
          placeholder="1.개인정보 수집목적 및"
        />
      </div>
      <label className="sign-input-four">
        <input
          type="checkbox"
          name="state"
          className="sign-state-four"
          checked={marketCheck}
          onChange={marketBtnCheck}
        />
        <span className="signCheck-four">
          마케팅 활용 동의 및 광고 수신 동의
        </span>
      </label>
      <div className="sign-four-text">
        <input
          type="text"
          className="sign-four-textline"
          placeholder="P!ckEat의 프로그램 및"
        />
      </div>
      <label className="sign-input-five">
        <input
          type="checkbox"
          name="state"
          className="sign-state-five"
          checked={smsCheck}
          onChange={smsBtnCheck}
        />
        <span className="signCheck-five">SMS 수신 동의</span>
        <span className="five-req">(선택)</span>
      </label>
      <label className="sign-input-six">
        <input
          type="checkbox"
          name="state"
          className="sign-state-six"
          checked={emailCheck}
          onChange={emailBtnCheck}
        />
        <span className="signCheck-six">E-Mail 수신 동의</span>
        <span className="six-req">(선택)</span>
      </label>
      <div className="clearBtn-contain">
        <button className="clearBtn-cancle" onClick={() => navigate('/')}>
          취소
        </button>
        <button className="clearBtn-join" onClick={() => navigate('/signup')}>
          가입하기
        </button>
      </div>
    </div>
  );
}

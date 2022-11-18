import React, { useState } from 'react';
import Login from './components/Login/Login';
import Terms from './components/Terms/Terms';
import Signup from './components/Signup/Signup';
import './UserForm.scss';

const UserForm = () => {
  const [formTitle, setFormTitle] = useState('login');

  return (
    <div className="loginform">
      {formTitle === 'login' && <Login setFormTitle={setFormTitle} />}
      {formTitle === 'terms' && <Terms setFormTitle={setFormTitle} />}
      {formTitle === 'signup' && <Signup setFormTitle={setFormTitle} />}
    </div>
  );
};

export default UserForm;

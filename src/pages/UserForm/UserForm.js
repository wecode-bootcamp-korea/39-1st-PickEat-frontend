import React, { useState } from 'react';
import Login from '../Login/Login';
import Terms from '../Terms/Terms';
import Signup from '../Signup/Signup';
import Main from '../Main/Main';
import './UserForm.scss';

const UserForm = () => {
  const [formTitle, setFormTitle] = useState('login');

  return (
    <div className="loginform">
      {/* {formTitle === 'login' && <Login setFormTitle={setFormTitle} />} */}
      {/* {formTitle === 'terms' && <Terms setFormTitle={setFormTitle} />} */}
      {formTitle === 'signup' && <Signup setFormTitle={setFormTitle} />}
      {/* {formTitle === 'Main' && <Main setFormTitle={setFormTitle} />} */}
    </div>
  );
};

export default UserForm;

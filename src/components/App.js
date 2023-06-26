import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout/layout';
import { Home } from 'pages/HomePage';
import Registration from 'pages/RegistrationPage';
import { Login } from 'pages/LoginPage';
import { Contacts } from 'pages/ContactsPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshContact } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshContact());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

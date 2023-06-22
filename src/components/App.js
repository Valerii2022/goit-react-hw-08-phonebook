// import { ContactList } from './ContactList';
// import { ContactForm } from './ContactForm';
// import { Filter } from './Filter';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout/layout';
import { Home } from 'pages/HomePage';
import Registration from 'pages/RegistrationPage';
import { Login } from 'pages/LoginPage';
import { Contacts } from 'pages/ContactsPage';

export const App = () => {
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

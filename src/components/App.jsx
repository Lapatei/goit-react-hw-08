import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import Layout from './Layout/Layout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="register" element={<RestrictedRoute><RegistrationPage /></RestrictedRoute>} />
      <Route path="login" element={<RestrictedRoute><LoginPage /></RestrictedRoute>} />
      <Route path="contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
    </Route>
  </Routes>
);

export default App;

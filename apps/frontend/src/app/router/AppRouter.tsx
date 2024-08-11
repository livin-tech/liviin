import { Route, Routes } from 'react-router-dom';
import App from '../app';
import HomePage from '../pages/Home';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

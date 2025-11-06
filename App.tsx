
import React from 'react';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import GalleryPage from './pages/GalleryPage';
import RegistrationPage from './pages/RegistrationPage';
import ContactPage from './pages/ContactPage';
import ResourcesPage from './pages/ResourcesPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="announcements" element={<AnnouncementsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

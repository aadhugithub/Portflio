import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CmsProvider } from './cms/CmsContext';
import { Home } from './pages/Home';
import { CaseStudy } from './pages/CaseStudy';
import { CMSPage } from './pages/CMSPage';
import { NotFound } from './pages/NotFound';
import { CMSDrawer } from './components/CMSAdmin/CMSDrawer';
import './styles/index.css';
import './styles/cms-editor.css';

export function App() {
  return (
    <CmsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/cms" element={<CMSPage />} />
          <Route path="/admin" element={<CMSPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Floating live in-browser CMS studio editor */}
        <CMSDrawer />
      </BrowserRouter>
    </CmsProvider>
  );
}

export default App;

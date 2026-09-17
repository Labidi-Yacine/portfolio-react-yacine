import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import PresentationPage from './pages/PresentationPage';
import SkillsPage from './pages/SkillsPage';
import SkillDetailPage from './pages/SkillDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import JourneyPage from './pages/JourneyPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="presentation" element={<PresentationPage />} />
          <Route path="competences" element={<SkillsPage />} />
          <Route path="competences/:slug" element={<SkillDetailPage />} />
          <Route path="realisations" element={<ProjectsPage />} />
          <Route path="realisations/:slug" element={<ProjectDetailPage />} />
          <Route path="parcours" element={<JourneyPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

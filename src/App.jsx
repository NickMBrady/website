import 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import ExperiencePage from './ExperiencePage';
import AboutPage from './AboutPage';
import OrthoticProstheticPage from './OrthoticProstheticPage';
import CED from './CompositeElementDetectionPage';
import DiffusionEdgePage from './DiffusionEdgePage';
import EM3DPPage from './EM3DPPage';
import KidneyPage from './KidneyPage';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path='/projects/orthoticprosthetic' element={<OrthoticProstheticPage />} />
        <Route path='/projects/compositeelementdetection' element={<CED />} />
        <Route path='/projects/diffusionedge' element={<DiffusionEdgePage />} />
        <Route path='/projects/electromagnetic3dprinting' element={<EM3DPPage />} />
        <Route path='/projects/kidneystonenavigation' element={<KidneyPage />} />
      </Routes>
    </Router>
  );
}

export default App;

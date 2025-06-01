import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarouselPage from './pages/CarouselPage';
import PinterestGallery from './pages/PinterestGallery';

const AppRouter = () => (
  <Router basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route path="/" element={<CarouselPage />} />
      <Route path="/pinterest-gallery" element={<PinterestGallery />} />
    </Routes>
  </Router>
);

export default AppRouter;

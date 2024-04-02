import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/home/Layout';
import AboutLayout from './components/about/AboutLayout';
import ServiceLayout from './components/services/ServiceLayout';
import GalleryLayout from './components/gallery/GalleryLayout';
import BlogLayout from './components/blog/BlogLayout';
import ContactLayout from './components/contact/ContactLayout';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/about' element={<AboutLayout />} />
        <Route path='/service' element={<ServiceLayout />} />
        <Route path='/gallery' element={<GalleryLayout />} />
        <Route path='/blog' element={<BlogLayout />} />
        <Route path='/contact' element={<ContactLayout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header   from './components/components/Header/Header';
import Footer   from './components/components/Footer/Footer';
import Home     from './components/page/Home/Home';
import Services from './components/page/Services/Services';
import About    from './components/page/About/About';
import Contact  from './components/page/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="page-wrapper">
        <Routes>
          <Route path="/"        element={<Home />}     />
          <Route path="/services" element={<Services />} />
          <Route path="/about"   element={<About />}    />
          <Route path="/contact" element={<Contact />}  />
          <Route path="*"        element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

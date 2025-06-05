import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/pages/Home';
import TablePage from './components/pages/TablePage';
import NotFound from './components/pages/NotFound';
import Footer from './components/common/Footer';
import Navigation from './components/common/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Container className="pb-4">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:id" element={<TablePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;

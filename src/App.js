import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/pages/Home';
import TablePage from './components/pages/TablePage';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Container className="py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:id" element={<TablePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

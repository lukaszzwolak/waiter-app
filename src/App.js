import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Container className="py-4">
        <Routes>
          <Route path="/" element={<div>Lista stolików</div>} />
          <Route path="/table/:id" element={<div>Szczegóły stolika</div>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

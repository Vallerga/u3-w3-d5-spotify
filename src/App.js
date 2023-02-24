import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import CentralColumn from './components/CentralColumn';



function App() {
  return (
    <BrowserRouter>
      <Container>        
        <Routes>
          <Route path="/" element={<CentralColumn />} />          
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

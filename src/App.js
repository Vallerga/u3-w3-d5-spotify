import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import SideBar from './components/SideBar';



function App() {
  return (
    <BrowserRouter>
      <SideBar/>
        <Routes>
          <Route path="/" element={<Home />} />          
        </Routes>      
    </BrowserRouter>
  );
}

export default App;

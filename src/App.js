import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import SideBar from './components/SideBar';
import MyPlayer from './components/MyPlayer';



function App() {
  return (
    <BrowserRouter>
      <SideBar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      <MyPlayer />
    </BrowserRouter>
  );
}

export default App;

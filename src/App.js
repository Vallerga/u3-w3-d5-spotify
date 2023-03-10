import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/HomePage';
import SideBar from './components/SideBar';
import MyPlayer from './components/MyPlayer';
import AlbumPage from './components/AlbumPage';
import ArtistPage from './components/ArtistPage';



function App() {
  return (
    <BrowserRouter>
      <SideBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<AlbumPage />} />
          <Route path="/artist" element={<ArtistPage />} />
        </Routes>
      <MyPlayer />
    </BrowserRouter>
  );
}

export default App;

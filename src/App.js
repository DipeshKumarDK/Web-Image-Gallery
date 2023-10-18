import './App.css';
import Home from './pages/Home/Home';
import SearchPage from './pages/SearchPage/SearchPage';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchPage" element={<SearchPage/>} />
        </Routes>
    </div>
  );
}

export default App;

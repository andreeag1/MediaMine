import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Home";
import Search from "./Search/Search";
import Video from "./Video/Video";
import Upload from "./Upload/Upload";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/video/:videoId" element={<Video />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/info:id" element={<Info />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

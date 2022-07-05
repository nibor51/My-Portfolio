import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@components/Navbar";
import About from "@pages/About";
import Projects from "@pages/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

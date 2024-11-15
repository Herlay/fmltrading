import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/homepage/home';
import Catalog from "./pages/catalog/catalog";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;

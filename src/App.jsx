import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { Destination } from "./pages/Destination/Destination.jsx";
import "./styles/Global.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

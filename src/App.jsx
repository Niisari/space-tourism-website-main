import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { Destination } from "./pages/Destination/Destination.jsx";
import { Crew } from "./pages/Crew/Crew.jsx";
import { Technology } from "./pages/Technology/Technology.jsx";
import "./styles/Global.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

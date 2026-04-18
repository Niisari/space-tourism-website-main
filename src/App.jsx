import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./styles/Global.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;

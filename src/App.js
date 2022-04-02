import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Header'
import Home from "./Home";

function App() {
  return (
    <Router>  
      <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/checkout" element= {<Header />} />
      </Routes>
    </Router>

  );
}

export default App;

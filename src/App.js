import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Test from "./Test";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { useEffect } from 'react'

function App() {
  const [{basket}, dispatch] = useStateValue()

  useEffect(() => {
    // Only run once
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS>>', authUser);
      if (authUser) {
        // user just logged in /  the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // User is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
        
      }
    })
  }, [])
  return (
    <Router>  
      <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/checkout" element= {<Checkout />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/test" element={<Test />}/>
      </Routes>
    </Router>

  );
}

export default App;

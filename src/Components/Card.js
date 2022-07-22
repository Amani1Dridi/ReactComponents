


import {
  BrowserRouter as 
  Routes,
  Route
}
from "react-router-dom";
import Header  from './Header';
import About from "../page/About";
import CardF from './CradF';
import Navbar from "./Navbar";


function Card() {
  return (
    
    <>
    <Navbar />
    
    <Routes>
      <Route exact path="/">
        <div className="container">
          <div className="inner">
            <Header />
             <CardF/>
          </div>
        </div>
      </Route>
      <Route path= "about/*" element={<About/>}>
        <About />
      </Route>
     
    </Routes>
    
  </>
);
}

export default Card;

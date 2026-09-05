import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul>
        <Link to= "/"><li>Home</li></Link> 
        <Link to= "/About"><li>About</li></Link> 
        <Link to= "/Contact"><li>Contact</li></Link> 
        
      </ul>
      <button>Get started</button>
    </div>
  );
};

export default Navbar;

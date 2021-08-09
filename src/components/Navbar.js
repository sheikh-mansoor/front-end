 import React from 'react'
 import './Navbar.css'
 import {Link} from 'react-router-dom'

 function Navbar(){
     return( 
     <div className="navbar bg-dark container">
     <h4 ><Link to="/" className="link">Home</Link></h4>
     <h4><Link to="/notes" className="link">Notes</Link></h4>
     <h4><Link to="/create" className="link">Create Notes</Link></h4>

     </div>
     )


 }

 export default Navbar;
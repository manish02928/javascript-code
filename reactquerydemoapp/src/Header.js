import {Link} from 'react-router-dom';
import React from 'react';
export default function Header(){

    return(
    <div className="App">
      <header className="App-header">
       <div className='header-container'>

        <nav style={{padding: "1rem", cursor: "pointer" , color: "red",fontSize: "1.5rem"}}>
          <Link to ="/home"> Home</Link> | {" "}
          <Link to ="/contactus">Contact US</Link> | {" "}
          <Link to ='/about'>About</Link>
        </nav>
       </div>
      </header>
    </div>
    );
}
import React from "react"; 
import "./style.css"

function Header(){
    return (
        <nav>
        <div className="center"><h1>Employee Directory</h1></div>
        <div className="center">
        <h4>Click on controls to filter by heading or use the search box to narrow your results.</h4>
        </div>
        </nav>
    ); 
}

export default Header; 
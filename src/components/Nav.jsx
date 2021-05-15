import React from 'react';
import {Link} from 'react-router-dom';


function Nav() {
    const navBar={
        display:"flex",
        justifyContent:"space-around",
        margin:"10 px"
    }
    return (
        <div>
            <nav>
                <ul style={navBar} >
                <Link to ="/main">
                    <li>Main</li>
                    </Link>
                    <Link to ="/producers"> </Link>
                    <Link to ="/awards">
                        
                    </Link>
            
            </ul> 
            </nav>
        </div>
    );
}

export default Nav;
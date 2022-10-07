import React, { useState } from 'react';
import '../App.css';
import Header from './Header';
// then import the page components
import Home from './pages/Home';
import Msg from './pages/Msg';



export default function Container() {

    const [currentPage, setCurrentPage] = useState();

    return (
        <div className="container-fluid-body">
            <Header />
            {/* LOL the following br tags cannot POSSIBLY be the best way to do this, but it DID produce the right effect - getting the main page out from behind the fixed navbar */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div>
                {/* {renderPage()} */}
                <Home />
                <Msg />
            </div>

       
        </div>
            )
}

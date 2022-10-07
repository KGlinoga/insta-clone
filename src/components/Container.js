import React, { useState } from 'react';
import '../App.css';
import Header from './Header';
// then import the page components
import Home from './pages/Home';



export default function Container() {

    const [currentPage, setCurrentPage] = useState();

    return (
        <div className="container-fluid-body">
            <Header />
            
            <div>
                {/* {renderPage()} */}
                <Home />
            </div>

        </div>
            )
}

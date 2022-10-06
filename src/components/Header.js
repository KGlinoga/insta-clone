import React from 'react';
import '../App.css';
import HomeIcon from '@mui/icons-material/Home';


function Header() {
    return (
        <div className="app__header row">

    <HomeIcon />
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
                alt="IG"
                className="IGLogo"
            />
            
            <div className="nav nav-tabs nav-justified">
                {/* <ul>
                    <li className="nav-item">
                        <a>
                            home
                        </a>
                    </li>

                    <li className="nav-item">
                        <a>
                            MSG
                        </a>
                    </li>

                    <li className="nav-item">
                        <a>
                            Create Post
                        </a>
                    </li>

                    <li className="nav-item">
                        <a>
                            Explore
                        </a>
                    </li>

                    <li className="nav-item">
                        <a>
                            Activity
                        </a>
                    </li>

                    <li className="nav-item">
                        <a>
                            Profile
                        </a>
                    </li>

                </ul> */}
            </div>

            <p></p>
        
        
        </div>
    )
};

export default Header;
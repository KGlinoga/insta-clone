import React from 'react';
import '../App.css';
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Avatar from '@mui/material/avatar';
import Face2Icon from '@mui/icons-material/Face2';

function Header() {
    return (
        <div className="app__header row">

            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
                alt="IG"
                className="IGLogo"
            />
            
            <div className="nav nav-tabs nav-justified">

                <ul className="navBar" >
                    <li className="navIcon">
                        <HomeIcon />
                    </li>

                    <li className="navIcon">
                        <ChatBubbleOutlineIcon />
                    </li>
                    
                    <li className="navIcon">
                        <AddBoxIcon />
                    </li>
                    
                    <li className="navIcon">
                        <ExploreIcon />
                    </li>
                    
                    <li className="navIcon">
                        <FavoriteBorderIcon />
                    </li>

                    <li className="navIcon">
                        <Face2Icon />
                    </li>

                    {/* <li className="navIcon" >
                        <Avatar>H</Avatar>
                    </li> */}

                </ul>
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
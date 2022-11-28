import React from 'react';
import '../App.css';
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Face2Icon from '@mui/icons-material/Face2';

export default function NavBar() {
    return (
        <div className="nav nav-tabs nav-justified">

            {/* <NavBar
                currentPage={currentPage}
                handlePageChange={handlePageChange} /> */}

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

                {/* Use React Router!! */}

            </ul>
        </div>
    )
}
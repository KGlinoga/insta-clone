import React from 'react';
import './Post.css';
import Avatar from '@mui/material/Avatar'

function Post() {
    return (
        <div className="post">
            {/* header -  avatar and username*/}
            <Avatar
                className="post__avatar" 
                alt="heygoodlurking"
                src="https://www.w3schools.com/howto/img_avatar2.png"
            />
            <h3>Username: heygoodlurking</h3>

            {/* image */}
            <img className="post__image"
                src="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"
                alt="mountains under mist"
                ></img>

            {/* username and caption */}
            <h4 className="post__text"><strong>heygoodlurking:</strong> OMG this is awesome</h4>
        </div>
    )
}

export default Post;
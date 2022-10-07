import React from 'react';
import Avatar from '@mui/material/Avatar';

export default function Card(props) {
    // const cardStyle = { width: '20rem' };

    return (
        <div className="post">
            {/* header -  avatar and username*/}
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt="heygoodlurking"
                    src="https://www.w3schools.com/howto/img_avatar2.png"
                />
                <h3>{props.username}</h3>
            </div>

            {/* image */}
            <img className="post__image"
                src={props.imageUrl}
                alt="mountains under mist"
            />

            {/* username and caption */}
            <h4 className="post__text"><strong>{props.username}: </strong>{props.caption}</h4>
        </div>
    )
}
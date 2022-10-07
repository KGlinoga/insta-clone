import React, { useState } from 'react';
import './Post.css';
import Card from './Card';
import Avatar from '@mui/material/Avatar';

    const posts = [
        {
            username: "JenWalters",
            caption: "doing things by the book of American Law since 1990.",
            imageUrl: "https://elcomercio.pe/resizer/o-gLKOuGVyy1l3WHhDGhT5pv_DY=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/JKRN66AC3JH6RMR3IICVVHRW2Y.jpg"
        },
        {
            username: "DashTheDog",
            caption: "woof! I love to run!",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHCN1JCw8KMMokOY-JHDsZjA4eKgjq1ZM4Fw&usqp=CAU"
        },
        {
            username: "heygoodlurking",
            caption: "yay!",
            imageUrl: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
        }
    ];

function Post({ username, caption, imageUrl }) {
    return (
        <div>
            {posts.map(posts => (
                <Card
                    username={posts.username}
                    imageUrl={posts.imageUrl}
                    caption={posts.caption}
                />
            ))}
        </div>
    )
}

export default Post;
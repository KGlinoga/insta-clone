import React, { useState } from 'react';
import './App.css';
import Post from './Post';
// import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([
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
      username:"heygoodlurking",
      caption:"yay!",
      imageUrl:"https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
    }
  ]);

  // useEffect: runs a piece of code based on a specific condition

  // useEffect(() => {
  //   // where the code runs
  //   db.collection('posts').onSnapshot(snapshot => {
  //       setPosts(snapshot.docs.map(doc => doc.data()))
  //     })
  // }, []);

  return (
    <div className="app">
      
      {/* Header */}
      <header className="app__header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram logo"></img>
        
        
      </header>
          
      <h1>hello! not yet deployed*</h1>

      {
        posts.map(post => (
          <Post
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        ))
      }
      
      {/* Posts */}

      {/* <Post username="DashTheDog" caption="arf!" imageUrl="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"/>
      <Post username="heygoodlurking" caption="yay!" imageUrl="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" />
      <Post username="PepperTheCat" caption="mi au!" imageUrl="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-1280.jpg" /> */}

    
    </div>
  );
}

export default App;

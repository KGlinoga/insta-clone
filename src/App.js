import React from 'react';
import './App.css';
import Post from './Post'

function App() {
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
      
      <Post username="DashTheDog" caption="arf!" imageUrl="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"/>
      <Post />
      <Post />
      {/* Posts */}
      {/* Posts */}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
import axios from "axios";
import MultiSelect from  'react-multiple-select-dropdown-lite';
import  'react-multiple-select-dropdown-lite/dist/index.css';

function App() {
  const [videoSetects, setVideoSelect] = useState([])
  const [videos, setVideoList] = useState([])

  const  handleOnchange  =  val  => {
    setVideoSelect(val)
  }

  useEffect(() => {
    (async () =>{
      const videos = await axios.get('http://127.0.0.1:8000/api/');
      setVideoList(videos.data);
    })();
  }, []);

  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to Mola555555555.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className='select-menu'>
        <div className='video-menu'>
          <MultiSelect
            onChange={handleOnchange}
            options={videos}
            name="영상선택"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

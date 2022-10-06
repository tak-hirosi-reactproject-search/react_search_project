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

  const handleSelectOnMenu = val =>{
    async function get(){
      // django api url => http://localhost:3355
      const res = await fetch('http://localhost:3355/video/');
      const result = await res.json();
      
      const jres = [];

      result.map((obj =>{
        const new_obj = {};
        new_obj.label = obj.name;
        new_obj.value = obj.id;
        jres.push(new_obj);
        
      }));
      
      setVideoList(jres);
    }
    get();
  };

// useEffect(()=>{
// console.log('videos==================>',videos)
// },[videos])

  return (
    <div className="App">
      <div className="App-header">
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
      </div>
      <div className='select-menu'>
        <div className='video-menu'>
          {/* <div>
            {videoSetects}
          </div> */}
          <MultiSelect
            onChange={handleOnchange}
            onMenuOpen={handleSelectOnMenu}
            options={videos}
            name="영상선택"
            placeholder="영상선택"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

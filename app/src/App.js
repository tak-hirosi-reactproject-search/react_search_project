import logo from './logo.svg';
import './App.css';

import React, { Component, useState } from 'react';

import MultiSelect from  'react-multiple-select-dropdown-lite';
import  'react-multiple-select-dropdown-lite/dist/index.css';




class App extends Component {
  state = {
    videos: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const videos = await res.json();
      this.setState({
        videos
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const [value, setvalue] = useState('');

    const handleOnchange  =  val  => {
      setvalue(val)
    };

    const  options  = this.state.videos.reduce((newObj, obj) =>{
      newObj[obj.id] = obj.name;
      return newObj;
    });
    console.log(options);

    return (
      <div>
        <div className='select-menu'>
          <div className='video-menu'>
            <MultiSelect
              onChange={handleOnchange}
              options={options}
              name="영상선택"
            />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;

import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import MultiSelect from  'react-multiple-select-dropdown-lite';
import  'react-multiple-select-dropdown-lite/dist/index.css';

function App() {
  const [value, setvalue] = useState('')

  const  handleOnchange  =  val  => {
    setvalue(val)
  }

  const  options  = [
    { label:  'Option 1', value:  'option_1'  },
    { label:  'Option 2', value:  'option_2'  },
    { label:  'Option 3', value:  'option_3'  },
    { label:  'Option 4', value:  'option_4'  },
  ]

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
            options={options}
            name="영상선택"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

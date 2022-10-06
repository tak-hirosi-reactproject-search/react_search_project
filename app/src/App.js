import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MultiSelect from  'react-multiple-select-dropdown-lite';
import  'react-multiple-select-dropdown-lite/dist/index.css';

function App() {


// 드롭바 시작 
  const [value, setvalue] = useState('')

  const  handleOnchange  =  val  => {
    setvalue(val)
  }


  const  options  = [
    { label:  'long sleeve', value:  '1'  },
    { label:  'short sleeve', value:  '2'  },
    { label:  'sleeveless', value:  '3'  },
    { label:  'onepiece', value:  '4'  },
  ]
// 드롭바1 끝

// 드롭바2 시작
  const [value2, setvalue2] = useState([])

  const  handleOnchange2  =  (val)  => {
    setvalue2(val)
  }

  const  options1  = [
    { label:  'red', value:  '5'  },
    { label:  'orange', value:  '6'  },
    { label:  'yellow', value:  '7'  },
    { label:  'green', value:  '8'  },
    { label:  'blue', value:  '9'  },
    { label:  'purple', value:  '10'  },
    { label:  'pink', value:  '11'  },
    { label:  'brown', value:  '12'  },
    { label:  'white', value:  '13'  },
    { label:  'grey', value:  '14'  },
    { label:  'black', value:  '15'  },
  ]
// 드롭바2 끝

// 드롭바3 시작
  const [value3, setvalue3] = useState([])

  const  handleOnchange3  =  (val)  => {
    setvalue3(val)
  }

  const  options3  = [
    { label:  'long_pants', value:  '16'  },
    { label:  'short_pants', value:  '17'  },
    { label:  'skirt', value:  '18'  },
  ]
// 드롭바3 끝

/* // 드롭바4 시작아악 */
const [value4, setvalue4] = useState([])

const  handleOnchange4  =  (val)  => {
  setvalue4(val)
}

const  options4  = [
  { label:  'red', value:  '19'  },
  { label:  'orange', value:  '20'  },
  { label:  'yellow', value:  '21'  },
  { label:  'green', value:  '22'  },
  { label:  'blue', value:  '23'  },
  { label:  'purple', value:  '24'  },
  { label:  'pink', value:  '25'  },
  { label:  'brown', value:  '26'  },
  { label:  'white', value:  '27'  },
  { label:  'grey', value:  '28'  },
  { label:  'sleeveless11', value:  '29'  },
]
/* // 드롭바4 끝 */




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> GPA5.33.
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

      <body>
        <div class="container">
          <div class="hero">




                              <li><a href="#">시작시간 시간선택 UI</a></li>
                              <li><a href="#">종료시간 시간선택 UI</a></li>




<div class="parent6">
                              <p><a href="#">상의 종류</a></p>
            <div>
              {value}
            </div>
            <div className='video-menu'>
              <MultiSelect
                onChange={handleOnchange}
                options={options}
                name="영상선택"/>
              </div>
</div>



<div class="parent5">
                              <p><a href="#">상의 색상</a></p>
{/* 이것도 드롭바 관련된듯? -시작 */}
              <div>
                {value2}
              </div>
              <div className='video-menu'>
                <MultiSelect
                  onChange={handleOnchange2}
                  options={options1}
                  name="top-type"/>
              </div>
{/* 이것도 드롭바 관련된듯? -끝 */}
</div>



<div class="parent2">
                              <p><a href="#">AND</a></p>
              <label class="switch-button">
               <input type="checkbox"/>
               <span class="onoff-switch"></span>
              </label>
                              <p><a href="#">OR</a></p>
</div> 
                              


<div class="parent4">
                              <p><a href="#">하의 종류</a></p>
{/* 이것도 드롭바 관련된듯? -테스트*/}
              <div>
                {value3}
              </div>
              <div className='video-menu'>
                <MultiSelect
                  onChange={handleOnchange3}
                  options={options3}
                  name="top-type"/>
              </div>
{/* 이것도 드롭바 관련된듯? -테스트*/}
</div>



<div class="parent2">
                              <p><a href="#">하의 색상</a></p>
{/* /* 이것도 드롭바 관련된듯? -테스트*/}
              <div>
               {value4}
              </div>
              <div className='video-menu'>
                  <MultiSelect
                    onChange={handleOnchange4}
                    options={options4}
                    name="top-type"/>
              </div>
{/* 이것도 드롭바 관련된듯? -테스트*/}
</div> 



<div class="parent">
                            {/* <div className='select-botton'> */}
                              <li><a href="#">검색</a></li>
                            {/* </div> */}

                              <li><a href="#">SR 저장</a></li>
                              {/* <div class="box1"></div> */}
                              {/* <div class="box2"></div> */}
</div>


                              

 



{/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ연습용ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
<body>
  <div class="box1"></div>
  <div class="box2"></div>
</body>
{/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}



          </div>
        </div>
      </body>
    </div>





  );
}

export default App;










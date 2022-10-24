import './Search.css';
import React, { useCallback, useState } from 'react';
import MultiSelect from 'react-multiple-select-dropdown-lite';
import 'react-multiple-select-dropdown-lite/dist/index.css';
import qs from 'qs';
import Modal from 'react-modal'
import axios from 'axios'

function Search () {
  // django api url => http://192.168.0.214:3333
  const target_url = 'http://localhost:3333';
  // Video menu list
  const [videos, setVideoList] = useState([])

  const handleVideoMenuSetting = val =>{
    async function get(){
      console.log("video menu url :" + target_url+'/video/')
      const res = await fetch(target_url+'/video/');
      const result = await res.json();
      
      const jres = [];
      result.map((obj =>{
        const new_obj = {};
        new_obj.label = obj.video;
        new_obj.value = obj.id;
        jres.push(new_obj);
        
      }));

      setVideoList(jres);
    }
    get();
  };

  // Video select value
  const [videoSelect, setVideoSelect] = useState([])
  const  OnchangeSelectVideo  =  val  => {
    setVideoSelect(val)
  }
    
  // 드롭바1 시작 
  const [attributeTopType, setAttributeTopType] = useState('')

  const  handleOnchangeAttributeTopType =  (val)  => {
    setAttributeTopType(val)
  }

  const  optionTopType  = [
    { label:  'long sleeve', value:  'long_sleeve'  },
    { label:  'short sleeve', value:  'short_sleeve'  },
    { label:  'sleeveless', value:  'sleeveless'  },
    { label:  'onepiece', value:  'onepiece'  },
  ]
  // 드롭바1 끝

  // 드롭바2 시작
  const [attributeTopColor, setAttributeTopColor] = useState([])

  const  handleOnchangeAttributeTopColor  =  (val)  => {
    setAttributeTopColor(val)
  }

  const  optionTopColor  = [
    { label:  'red', value:  'red'  },
    { label:  'orange', value:  'orange'  },
    { label:  'yellow', value:  'yellow'  },
    { label:  'green', value:  'green'  },
    { label:  'blue', value:  'blue'  },
    { label:  'purple', value:  'purple'  },
    { label:  'pink', value:  'pink'  },
    { label:  'brown', value:  'brown'  },
    { label:  'white', value:  'white'  },
    { label:  'grey', value:  'grey'  },
    { label:  'black', value:  'black'  },
  ]
  // 드롭바2 끝

  // 드롭바3 시작
    const [attributeBottomType, setAttributeBottomType] = useState([])

    const  handleOnchangeAttributeBottomType  =  (val)  => {
      setAttributeBottomType(val)
    }

    const  optionBottomType  = [
      { label:  'long pants', value:  'long_pants'  },
      { label:  'short pants', value:  'short_pants'  },
      { label:  'skirt', value:  'skirt'  },
    ]
  // 드롭바3 끝

  /* // 드롭바4 시작아악 */
  const [attributeBottomColor, setAttributeBottomColor] = useState([])

  const  handleOnchangeAttributeBottomColor  =  (val)  => {
    setAttributeBottomColor(val)
  }

  const  optionBottomColor  = [
    { label:  'red', value:  'red'  },
    { label:  'orange', value:  'orange'  },
    { label:  'yellow', value:  'yellow'  },
    { label:  'green', value:  'green'  },
    { label:  'blue', value:  'blue'  },
    { label:  'purple', value:  'purple'  },
    { label:  'pink', value:  'pink'  },
    { label:  'brown', value:  'brown'  },
    { label:  'white', value:  'white'  },
    { label:  'grey', value:  'grey'  },
    { label:  'black', value:  'black'  },
  ]
  /* // 드롭바4 끝 */

  /* // 모달창 */
  let subtitle;
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  // And Or button
  const [condition, setCondition] = useState("intersect");
  const onCheckedCondition = useCallback(
    (checked) =>{
      if(checked) {
        setCondition("union");
      }
      else {
        setCondition("intersect");
      }
    },
    [condition]
  );
  // And Or button

  //modal
  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  const openModalHandler = val =>{
    setIsOpen(!modalIsOpen);
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  //upload button
  const [fileList, setFileList] = useState(["......."])

  const uploadHandler =  (e)  => {
    const fileArr = e.target.files;
    let fileURLs = [];

    let file;
    let maxFile = 50;
    let filesLength = fileArr.length > maxFile ? maxFile : fileArr.length;

    if (fileArr.length > maxFile) alert('영상은 한번에 최대 ${maxFile}장 까지 업로드 가능합니다');

    for (let i = 0; i < filesLength; i++) {
      file = fileArr[i]

      if(file.type !== 'video/mp4') {
        setFileList([]);
        alert('mp4 파일만 업로드 가능합니다');
        break;
      }else {
        let reader = new FileReader();
        reader.onload = () => {
          fileURLs[i] = reader.result;
          setFileList([...fileURLs, file.name]);
        };
        reader.readAsDataURL(file);
      }
    }
  }
 

  // inference button
  const onClickHandler = () => {
    if (fileList) {
        axios
            .post(
                target_url + '/video/',
                {
                  "video" : fileList[0],
                  "name" : fileList[1],
                  "fps" : null,
                  "last_frame" : null
                }
            )
            .then((res) => {
                if (res) {
                    alert(res.data);
                } else {
                    alert(res.data.msg);
                }
            })
            .catch((err) => {
                alert("전송 실패 : " + err);
            });
    }
  };



  // search button
  const [searchResults, setSearchResults] = useState([])

  const handleSearchObjects = val =>{
    async function get(){
      const video_id = videoSelect;
      const top_type = attributeTopType;
      const top_color = attributeTopColor;
      const bottom_type = attributeBottomType;
      const bottom_color = attributeBottomColor;
      const qstr = qs.stringify({
        video_id,
        top_type,
        top_color,
        bottom_type,
        bottom_color,
        condition,
      });
      console.log("Get : "+ target_url+'/search/'+encodeURI(qstr)+"/");
      // django api url => http://192.168.0.214:3355
      const res = await fetch(target_url+'/search/'+encodeURI(qstr)+"/");
      const result = await res.json();
      
      const jres = [];
      result.map((obj =>{
        const new_obj = {};
        new_obj.bbox_id = obj.bbox_id;
        new_obj.image = obj.image;
        new_obj.frame_num = obj.frame_num;
        new_obj.obj_id = obj.obj_id;
        jres.push(new_obj);
        
      }));


      setSearchResults(jres);
      console.log("==================");
      console.log(searchResults);
    }
    get();
  };
  // search botton


  return (
    <div className="Search">
        <header className="Search-header">
          <div>
            <div className='search-result'>
              {searchResults.map((obj) => (
                <div className="obj-item" key={obj.bbox_id}>
                  <img src={target_url + obj.image} />
                  <hr/>
                  <p>FRAME : {obj.frame_num}</p>
                </div>
              ))}
            </div>
            {/* <img src={logo} className="App-logo" alt="logo" />
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
            </a> */}
          </div>
        </header>
        
        <body>
          <div class="container">
            <div class="hero">
                <div class="video-menu">
                  <MultiSelect
                    onChange={OnchangeSelectVideo}
                    onMenuOpen={handleVideoMenuSetting}
                    options={videos}
                    name="영상선택"
                    placeholder="영상선택"
                  />
                </div>


                <p>
                <button class="custom-button2 button-eff">
                영상 시작시간 선택 
                </button>
                </p>
                                                        
                                                        
                <p>
                <button class="custom-button2 button-eff">
                영상 종료시간 선택
                </button>
                </p>


                <div class="parent6">
                            
                            <p>상의 종류</p>
                            
                            <div className='video-menu'>
                              <MultiSelect
                                onChange={handleOnchangeAttributeTopType}
                                options={optionTopType}
                                name="영상선택"/>
                            </div>
                </div>



                <div class="parent5">
                                              <p>상의 색상</p>
                {/* 이것도 드롭바 관련된듯? -시작 */}
                              
                              <div className='video-menu'>
                                <MultiSelect
                                  onChange={handleOnchangeAttributeTopColor}
                                  options={optionTopColor}
                                  name="top-type"/>
                              </div>
                {/* 이것도 드롭바 관련된듯? -끝 */}
                </div>



                <div class="parent2">
                                              <p>AND</p>
                              <label class="switch-button">
                              <input 
                                type="checkbox"
                                onChange={(e) => onCheckedCondition(e.target.checked)}
                              />
                              <span class="onoff-switch"></span>
                              </label>
                                              <p>OR</p>
                </div> 
                                


                <div class="parent4">
                                              <p>하의 종류</p>
                {/* 이것도 드롭바 관련된듯? -테스트*/}
                              
                              <div className='video-menu'>
                                <MultiSelect
                                  onChange={handleOnchangeAttributeBottomType}
                                  options={optionBottomType}
                                  name="top-type"/>
                              </div>
                {/* 이것도 드롭바 관련된듯? -테스트*/}
                </div>



                <div class="parent2">
                                              <p>하의 색상</p>
                {/* /* 이것도 드롭바 관련된듯? -테스트*/}
                            
                              <div className='video-menu'>
                                  <MultiSelect
                                    onChange={handleOnchangeAttributeBottomColor}
                                    options={optionBottomColor}
                                    name="top-type"/>
                              </div>
                {/* 이것도 드롭바 관련된듯? -테스트*/}
                </div> 

                <div class="parent7">
                {/* /* 이것도 드롭바 관련된듯? -테스트*/}
                            
                              <div className='modal'>
                                  <Modal
                                    isOpen={modalIsOpen}
                                    onAfterOpen={afterOpenModal}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                  >
                                    
                                    <div></div>
                                    <form>
                                      <input type = "file" multiple={true} id="fileUpload" accept=".mp4" onChange={uploadHandler}  />
                                      <button
                                      class="custom-button button-eff"
                                      onClick={(e) => onClickHandler(e)}> 
                                      ㅎ
                                      </button> 
                                    </form>
                                    {/* <button
                                      class="custom-button button-eff"
                                      onClick={(e) => onClickHandler(e)}> 
                                      Inference2
                                    </button>  */}
                                  </Modal>
                              </div>

                {/* 이것도 드롭바 관련된듯? -테스트*/}
                </div>

                <div class="parent">
                    <p>
                    <button
                      class="custom-button button-eff"
                      onClick={(e) => openModalHandler(e)}> 
                    업로드
                    </button>
                    </p>
                    <p>
                    <button
                      class="custom-button button-eff"
                      onClick={(e) => handleSearchObjects(e)}> 
                    검색11
                    </button>
                    </p>

                    <p>
                    <button class="custom-button button-eff">
                    SR 저장
                    </button>
                    </p>
                </div>                        

                {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ버튼 효과 연습용ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
              

                {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}

            </div>
          </div>
        </body>
    </div>
  );
}

export default Search;










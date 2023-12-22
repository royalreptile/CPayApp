import React, { useState } from 'react';

const FourDigitInput = ({ focus = false }) => {
  //Initialize input box focus
  // const [box1, setBox1] = useState(false);
  // const [box2, setBox2] = useState(false);
  // const [box3, setBox3] = useState(false);
  // const [box4, setBox4] = useState(false);

  const [boxes, setBoxes] = useState([true,false,false,false])
  //focus previous input if box deleted and focus next if box filled

  let box1;
  let box2;
  let box3;
  let box4;
 

  function handleAutoFocusOnChange(key) {
    return (e) => {
      // console.log(e.target.value)
      switch (key) {
        //box1
        case 0:
          if (e.target.value) {
            box2.focus()
          } else {
            
          }
          break;
        //box2
        case 1:
          if (e.target.value) {
            box3.focus()
          } else {
            box1.focus()
          }
          break;
        //box3
        case 2:
          if (e.target.value) {
            box4.focus()
          } else {
            box2.focus()
          }
          break;
        //box4
        case 3:
          if (e.target.value) {

          } else {
            box3.focus()
          }
          break;
      
        default:
          break;
      }
    }
  }
    return (
      <div className="four-digit-container">
        <div className='input-item'>
          <input type="password" maxLength="1" ref={(input)=>{box1= input}} onChange={handleAutoFocusOnChange(0)} />
        </div>
     
        <div className='input-item'>
          <input type="password" maxLength="1" ref={(input)=>{box2= input}} onChange={handleAutoFocusOnChange(1)}  />
        </div>
     
        <div className='input-item'>
          <input type="password" maxLength="1" ref={(input)=>{box3 = input}} onChange={handleAutoFocusOnChange(2)}/>
        </div>
     
        <div className='input-item'>
          <input type="password" maxLength="1" ref={(input)=>{box4 = input}} onChange={handleAutoFocusOnChange(3)}/>
        </div>
     
      </div>
    );
}

export default FourDigitInput;

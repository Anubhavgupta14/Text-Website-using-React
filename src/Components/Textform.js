//import React from 'react'
import React, {useState} from 'react'

export default function Textform(Prop) {
    const handelupclick = ()=>{
        //console.log("Clicked");
        let a = text.toUpperCase();
        setText(a);
    }
    const handleonchange=(event)=>{
        //console.log("ok");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter the string');

  return (
    <>
    <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">{Prop.heading}</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleonchange}></textarea>
    </div>
    <button className='btn btn-primary' onClick={handelupclick}>UpperCase</button>
    <div className='container my-3'>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} Character Counts</p>
    </div>
    </>
  )
}

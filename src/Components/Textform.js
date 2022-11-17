//import React from 'react'
import React, {useState} from 'react'

export default function Textform(Prop) {
    const handelupclick = ()=>{
        //console.log("Clicked");
        let a = text.toUpperCase();
        setText(a);
    }
    const handellowclick = ()=>{
      //console.log("Clicked");
      let a = text.toLowerCase();
      setText(a);
  }
  const handelcleclick = ()=>{
    let a = "";
    setText(a);
}
    const handleonchange=(event)=>{
        //console.log("ok");
        setText(event.target.value);
    }
    const [text, setText] = useState('');

  return (
    <>
    <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">{Prop.heading}</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleonchange}></textarea>
    </div>
    <button className='btn btn-primary mx-2' onClick={handelupclick}>UpperCase</button>
    <button className='btn btn-primary mx-2' onClick={handellowclick}>LowerCase</button>
    <button className='btn btn-primary mx-2' onClick={handelcleclick}>Clear</button>
    <div className='container my-3'>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} Character Counts</p>
    </div>
    </>
  )
}

import React, {useState} from 'react'

export default function Textform(Prop) {
    const handelupclick = ()=>{
        let a = text.toUpperCase();
        setText(a);
        Prop.showAlert("Converted to UpperCase","success")
    }
    const handellowclick = ()=>{
      let a = text.toLowerCase();
      setText(a);
      Prop.showAlert("Converted to LowerCase","success")
  }
  const handelcleclick = ()=>{
    let a = "";
    setText(a);
    Prop.showAlert("Clear","success")
}
const handelextraspace = ()=>{
  let a = text.split(/[ ]+/);
  setText(a.join(" "));
  Prop.showAlert("Reduced Extra Spaces","success")
}
    const handleonchange=(event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');

  return (
    <>
    <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">{Prop.heading}</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor: Prop.mode==='dark'?'rgb(51 74 250)':'white', color: Prop.mode==='dark'?'white':'black'}} rows="8" value={text} onChange={handleonchange}></textarea>
    </div>
    <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handelupclick}>UpperCase</button>
    <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handellowclick}>LowerCase</button>
    <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handelcleclick}>Clear</button>
    <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handelextraspace}>Remove Extra Space</button>
    <div className='container my-3'>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Character Counts</p>
    </div>
    </>
  )
}

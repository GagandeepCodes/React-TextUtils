import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpCase = () =>{
    // console.log("The button was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase" , "success");
  }
  const handleLoCase = () =>{
    // console.log("The button was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase" , "success");
  }
  const handleClear = () =>{
    // console.log("The button was clicked " + text);
    let newText = "";
    setText(newText);
   props.showAlert("TextArea Cleared" , "success");
  }
  const handleCopy = ()=>{
    console.log("I am Copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  }

  const handleOnChange = (event) =>{
    console.log("on change");
    setText(event.target.value);
  }
  const [text, setText] = useState("Enter your Text here");
  return (
    <>
    <div className="container"  style = {{color: props.mode==='dark'?'white':'#212529'}}>
      <h1> {props.heading}</h1>
        <form>
            <div className="form-group">
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode==='dark'?'#212529':'white', color : props.mode==='dark'?'white':'black' }} rows="8"></textarea>
            </div>  
        </form>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUpCase}>Convert to Uppercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLoCase}>Convert to Lowercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleClear}>Clear Text</button>
    </div>
    <div className="container my-2"  style = {{color: props.mode==='dark'?'white':'#212529'}}>
      <h1>
        Text Summary 
      </h1>
      <p>
       {text.split(" ").length} words , {text.length} characters
      </p>
      <p>
       {0.008 * text.split(" ").length} Minutes taken to read the words
      </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}

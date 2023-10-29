import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick= () =>
    {
        console.log("uppercase was clicked"+ text);
        let newtextc= text.toUpperCase();
                setText(newtextc);
                props.showAlert("converted to uppercase", "success");

    }
    const handleLoClick= () =>
    {
        console.log("lowercase was clicked"+ text);
        let newtext= text.toLowerCase();
                setText(newtext);

    }
    const handleClearClick= () =>
    {
  
        let newtext= '';
                setText(newtext);

    }
    const handleOnChange= (event) =>
    {
       // console.log("uppercase on change");
        setText(event.target.value);
    }
      const handleCopy = () =>{
        console.log("i am copy");
        var text = document.getElementById("mybox");
        text.select();
        //text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
      }
      const handleExtraSpaces = () =>
      {
        let newText = text.split(/[]+/);
        setText(newText.join(" "))
      }

    const [text, setText] = useState('enter text here');
//text = "new text";  //wrong way to change
    //setText("new text"); //correct way to change the state
   
  return (
    <>
  <div className='container'> 
  <h1>{props.heading} </h1>
  <div class="mb-3">
    <textarea className="form-control" value= {text} onChange={handleOnChange} id="mybox" cols="30" rows="10">

    </textarea>
  </div>
  
    
  <button type="submit" className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button> 
  <button type="submit" className="btn btn-primary mx-2" onClick={handleLoClick}>convert to Lowercase</button> 
  <button type="submit" className="btn btn-primary mx-2" onClick={handleClearClick}>clear text</button> 
  <button type="submit" className="btn btn-primary mx-2" onClick={handleCopy}>copy text</button>
  <button type="submit" className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3">
        <h1>your text summaery</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter something in the text to preview it here"}</p>
    </div>
    </>
  )
}

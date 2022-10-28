import React, {useState} from 'react'


export default function Textform(props) {
    const [text, setText] = useState("");

    const handleupclick =  ()=>{
        let newtext = text.toUpperCase()
        setText(newtext);
        props.showAlert("Enable to upperCase", "success")
    }

    const handledownclick =  ()=>{
        let newtext = text.toLowerCase()
        setText(newtext);
        props.showAlert("Enable to lowerCase", "primary")
    }

    const handleonchanged = (event)=>{
        setText(event.target.value);
    }
    
    const handleCopy = ()=>{
        console.log("i am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        setText(text)
        props.showAlert("Enable to upperCase", "seccess")
    }

    const handleSpaces = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Enable to upperCase", "dark")
    }

  return (
    <>
    <div className="container" style={{color: props.mode==="light"?"black":"white"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="from-control" onChange={handleonchanged} value={text} style={{backgroundColor: props.mode==="dark"?"black":"white", color: {color: props.mode==="light"?"black":"white"}}} id="mybox" cols="150" rows="14"></textarea>
        </div>
        {/* <textarea name="from-control" id="mybox" cols="30" rows="10"></textarea> */}
        <button className="btn btn-primary" onClick={handleupclick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handledownclick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2"  onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-2"  onClick={handleSpaces}>Use Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==="light"?"black":"white"}}>
        <h1>This is the text summary</h1>
        <p>{text.split(" ").length} Words and {text.length} Charecter</p>
        <p>{0.008 * text.split(" ").length} munites to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Your text preview in empty"}</p>
    </div>
    </>
  )
}

import React, {useState}from 'react'



export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        console.log('clicked')
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLowClick = () => {
        console.log('clicked')
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleOnChange = (event) => {
        console.log('changed')
        setText(event.target.value)
    }
   
return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control"value={text}onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter text here'></textarea>
        </div>
        <button className="btn btn-primary mx-1"   onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1"   onClick={handleLowClick}>Convert to lowercase</button>
    
    </div>
    <div className='container my-3'>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length - 1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>

  )
}

// I made this react framework app yesterday
// wanna see?
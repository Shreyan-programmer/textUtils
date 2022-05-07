import React, {useState}from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        console.log('clicked')
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleOnChange = (event) => {
        console.log('changed')
        setText(event.target.value)
    }
const [text, setText] = useState('Enter text here');
return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control"onChange={handleOnChange} value={text}id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary"  onClick={handleUpClick}>Convert to uppercase</button>
    </div>
  )
}

import React, {useState} from 'react';

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);                   // change the content of the box on UpClick
    }

    const handleDownClick = () => {
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);                   // change the content of the box on DownClick
    }

    const handleCamelClick = () => {
        console.log("Camelcase was clicked");
        let newText = text.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
        setText(newText);                   // change the content of the box on CamelClick
    }

    const clearText = () => {
        setText('');                        // clear the text box
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);        // allows us to edit the text even after event call
    }

    const [text, setText] = useState('');

    return (
        <div>

            <div className="container">
                <div class="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>

                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCamelClick}>Convert to Camelcase</button>
                <button className="btn btn-primary mx-2" onClick={clearText}>Clear text</button>
            </div>
            
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>Time to read: {text.split(" ").length/125} minutes</p>

                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Enter something to preview."}</p>
            </div>
        </div>
    )
}


/* 
STATES OF A COMPONENT
- A component can have states. The content inside a component can have a state. 
- Whenever the state of a component changes, the component is re-rendered.


*/
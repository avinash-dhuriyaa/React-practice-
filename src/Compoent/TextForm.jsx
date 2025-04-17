import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState(""); // ✅ Initial state

  const handleUpClick = () => {
    console.log("Uppercase was clicked" +text);
    let newText = text.toUpperCase();
    setText(newText);
    
  };

  const handleUpChange = (event) => {
    console.log("on Change");
    setText(event.target.value); // ✅ Update state on typing
  };

  return (
    <>
 <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text} // ✅ Not "text" string
          onChange={handleUpChange}
          id="MyBox"
          rows="8"
        ></textarea>
      </div>
      <button
        className="btn btn-primary"
        onClick={handleUpClick}
      >
        Convert to Uppercase
      </button>
    </div>
    <div className="container my-3">
      <h2>Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length}</p>
      <p>{0.008*text.split("").length}minutes read</p>
      <h2>preview</h2>
      <p>text</p>
    </div>
    </>
  );
}

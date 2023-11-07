import React, { useState } from "react";

export default function TextFor(props) {
  const [text, setText] = useState("Text Here");

  //Handler for lowercase
  const handleLowClick = ()=>{
    setText(text.toLowerCase());
  }

  //Handler for uppercase
  const handleUpClick = () => {
    setText(text.toUpperCase());
  }

  //Handler to captilize the text data
  const handleOnCaptilize = ()=>{
    let words = text.split(" ");
    for(let i=0; i<words.length; i++){
      words[i] = words[i].charAt(0).toUpperCase()+words[i].slice(1);
    }
    setText(words.join(" "));
  }

  //Handler to captilize the first word in a sentence
  const handleOnSentence = ()=>{
    let words = text.split(" ");
    if(words.length > 0){
      words[0] = words[0].charAt(0).toUpperCase()+words[0].slice(1);
      setText(words.join(" "));
    }    
  }

  //Handle on alter words
  const handleOnAlternateWord = ()=>{
    let words = text.split(" ");
    for(let i=0; i<words.length; i++){
      if(words[i] === words[i].toUpperCase()){
          words[i] = words[i].toLowerCase();
      }else{
        words[i] = words[i].toUpperCase();
      }
    }
    setText(words.join(" "));
  }

  //Handler on alternate case
  const handleOnAlternateCase = () => {
    let words = text.split(" ");
    let result = "";
  
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length; j++) {
        if (j % 2 === 0) {
          result += words[i][j].toUpperCase();
        } else {
          result += words[i][j].toLowerCase();
        }
      }
      result += " ";
    }
    setText(result.trim()); // Remove trailing space and update the text
  }

  const removeExtras = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  

  //Handler to clear the data
  const handleClear = ()=>{
    setText("");
  }

  //Targeted element (text)
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <div className="form-group">
        <h1>{props.heading}</h1>
        <label htmlFor="exampleFormControlTextarea1">{props.title}</label>
        <textarea
          onChange={handleOnChange}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          value={text}
        ></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>lower case</button>
        <button className="btn btn-success my-3 mx-2" onClick={handleUpClick}>UPPER CASE</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleOnSentence}>Sentence word</button>
        <button className="btn bg-success my-3 mx-2" onClick={handleOnAlternateWord}>AlTeR Word</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleOnAlternateCase}>AlTeR case</button>
        <button className="btn btn-warning my-3 mx-2" onClick={removeExtras}>Remove Extras</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleOnCaptilize}>Captilize</button>
        <button className="btn btn-danger my-3 mx-2" onClick={handleClear}>Clear</button>
      </div>

      <div className="container">
        <h2>Text Summary</h2>
        <p>Words count:{text.split(" ").length} Char length:{text.length}</p>
        <h3>Preview Text</h3>
        {text}
      </div>
    </>
  );
}

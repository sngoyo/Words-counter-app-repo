import React from "react";
import {useState} from "react";
import "./index.css";
//import render from "dom-serializer";
//import { PassThrough } from "stream";

export default function App(){

  return (
    <div>
     <h1 className="title">Words Counter App</h1>
     <p className="signature"><strong><em>Created by Salim</em></strong></p>
     <Counter />

    </div>
  );
}




function  Counter(){
  const [text, setText] = useState("");
  const [isActive, setIsActive] = useState(true);


  const handleTextChange = e => {
    e.preventDefault()
    setText(e.target.value)
    setIsActive(false)

  }

  const wordCounter = () => {
    let value = 0;
    let newtext = text.split(" ");

    for (let i = 0; i < newtext.length; i++){
         if (newtext[i] === ""){
           value = value;
         } else {
           value = value + 1;
         }
    }

    if (text === ""){
      return ;
    } else {
     return <div className="alert alert-success output">
     <span>Counting number of words...{value}</span>
    </div>
    }

  }



   return (
     <div className="counter form-control" style={{backgroundColor: isActive ? "white": "lightgrey"}}>
       <h2>Please enter your words for counting</h2>
       <textarea className="form-control" name="text"  onChange={handleTextChange} placeholder="Enter your word to count....."/>

       {wordCounter()}
     </div>
   );

}


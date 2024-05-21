import React, { useState } from "react";
import "./App.css";
// steps
// 1.Input Form to take user input
//2.After user type input and click on submit button
//3.Call one function that will check user input is even or odd
//4.If its even print Fizz in Green text
//5.Else print Buzz in Red Text
const App = () => {
  const [data, setData] = useState(0);
  const [display, setDisplay] = useState(null);
  function submitHandler() {
    console.log(typeof data);
    // alert("data  " + data);
    // alert("Hii "+data);
    console.log();
    if (data % 2 != 0) {
      alert("Fizz");
      setDisplay("Fizz");
      //   console.log("Data : " + display);
    } else {
      alert("Buzz");
      setDisplay("Buzz");
      //   console.log("Data : " + display);
    }
  }
  return (
    <>
      <div className="parent-box">
        <h1 style={{color:"grey"}}>FizzBuzz Game</h1>
      <h1 className={display === "Fizz" ? "setRed" : "setGreen"}>{display}</h1>
        <div className="child">
          <input
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
            placeholder="enter your input"
          />
          <button onClick={submitHandler}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default App;

import { useContext,useState } from "react";
import { InputCalculatorContext } from "./context";
import './App.css'

function App() {
  const context = useContext(InputCalculatorContext)
  var [result, setResult] = useState(0);
  
  function inputData(e)
  {
    context.setData(e.target.value);
  }
  function doAdd(e)
  {
    setResult(prevResult => prevResult + parseInt(context.data))
  }

  function doSubtract(){
    setResult(prevResult => prevResult - parseInt(context.data))

  }
  function doMultiply()
  {
    setResult(prevResult => prevResult * parseInt(context.data))

  }
  function doDivine()
  {
    setResult(prevResult => prevResult / parseInt(context.data))

  }
  function resetInput(e)
  {
    context.setData(0);
    
    console.log(e.target.value)
  }
  function resetResult()
  {
    setResult(0);

  }
  return (
  

    <div className="App">
      <h1>Simplest Working Calculator</h1>
      <p className="result">{result}</p>
      <div >

      <input  value = {context.data} className="inputBox" onChange={inputData}></input>
      </div>
      <br/>
      <div className="button">

      <button className="btn Add" onClick={doAdd}>Add</button>
      <button className="btn Subtract" onClick={doSubtract}>Subtract</button>
      <button className="btn Multiply" onClick={doMultiply}>Multiply</button>
      <button className="btn Divine" onClick={doDivine}>Divine</button>
      <button className="btn btn_special Divine" type ="reset" onClick={resetInput}>Reset Input</button>
      <button className="btn btn_special Divine" onClick={resetResult}>Reset Result</button>
      </div>

    </div>

  );
}

export default App;

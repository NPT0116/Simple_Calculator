import { useContext,useState } from "react";
import { InputCalculatorContext } from "./context";
import './App.css'

function App() {
  const context = useContext(InputCalculatorContext)
  var [result, setResult] = useState(0);
  function inputData(e)
  {
    const inputValue = e.target.value;
    
 
    context.setData(inputValue);
  
    console.log ("input", inputValue)
    console.log(context.data);
  }
  function doAdd(e)
  {
    setResult(prevResult => prevResult + parseInt(context.data))
  }
  return (
  

    <div className="App">
      <h1>Simplest Working Calculator</h1>
      <h1>{result}</h1>
      <input className="inputBox" onChange={inputData}></input>
      <br/>
      <button className="Add" onClick={doAdd}>Add</button>
    </div>

  );
}

export default App;

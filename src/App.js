import "./App.css";
import Us1 from "./useStateExamples/Us1";
import Us2 from "./useStateExamples/Us2";
import Us3 from "./useStateExamples/Us3";
import Us4 from "./useStateExamples/Us4";

function App() {
  return (
    <div className="App">
      <p>Incorrect</p>
      <Us1 />
      <p>Correct</p>
      <Us2 />
      <p>UseState With Object</p>
      <Us3 />
      <p>UseState with Array</p>
      <Us4/>
    </div>
  );
}

export default App;

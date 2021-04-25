import "./App.css";
import Ue1 from "./useEffectExamples/Ue1";
import Ue2 from "./useEffectExamples/Ue2";

function App() {
  return (
    <div className="App">
      <p>useEffect Examples</p>
      <Ue1 />
      <p>Conditional Run Effects</p>
      <Ue2/>
    </div>
  );
}

export default App;

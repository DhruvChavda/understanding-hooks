import "./App.css";
import Ue1 from "./useEffectExamples/Ue1";
import Ue2 from "./useEffectExamples/Ue2";
import Ue3 from "./useEffectExamples/Ue3";

function App() {
  return (
    <div className="App">
      <p>useEffect Examples</p>
      <Ue1 />
      <p>Conditional Run Effects</p>
      <Ue2 />
      <p>Render only ONCE (check console)</p>
      <Ue3 />
    </div>
  );
}

export default App;

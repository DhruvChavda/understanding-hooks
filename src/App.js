import "./App.css";
import Ue1 from "./useEffectExamples/Ue1";
import Ue2 from "./useEffectExamples/Ue2";
import Ue3 from "./useEffectExamples/Ue3";
import Ue4 from "./useEffectExamples/Ue4";
import Ue5 from "./useEffectExamples/Ue5";

function App() {
  return (
    <div className="App">
      <p>useEffect Examples</p>
      <Ue1 />
      <p>Conditional Run Effects</p>
      <Ue2 />
      <p>Render only ONCE (check console)</p>
      <Ue3 />
      <p>willUnmount Example</p>
      <Ue4 />
      <p>Interval Example</p>
      <Ue5 />
    </div>
  );
}

export default App;

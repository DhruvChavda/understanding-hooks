import "./App.css";
import DfUe1 from "./dataFetching/DfUe1";
import DfUe2 from "./dataFetching/DfUe2";
import DfUe3 from "./dataFetching/DfUe3";

function App() {
    return (
        <div className="App">
            <p>All Users</p>
            <DfUe1/>
            <p>useEffect Selective Data fetching</p>
            <DfUe2 />  
            <p>useEffect Selective Data fetching on button click!</p>
            <DfUe3/>

        </div>
    );
}

export default App;

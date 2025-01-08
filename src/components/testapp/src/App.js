import "./App.css";
import Child from "./components/Child"
import Parent from "./components/Parent";

function App() {
  return (
    <div>
      <h1>This is a parent component</h1>
      <ul>
        <li>
          <Parent />
        </li>
      </ul>
    </div>
  );
}

export default App;

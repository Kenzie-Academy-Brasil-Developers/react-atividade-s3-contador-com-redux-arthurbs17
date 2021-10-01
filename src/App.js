import "./App.css";
import Display from "./store/components/Display";
import Counter from "./store/components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Display />
        <Counter />
      </header>
    </div>
  );
}

export default App;

import "./index.css";
import Circle from "./components/Circle";

function App() {
  return (
    <div className="App">
      <Circle filter="blur(8px)" backgroundColor="blue" />
      <Circle filter="blur(8px)" backgroundColor="purple" />
    </div>
  );
}

export default App;

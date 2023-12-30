import MagicBall from "./MagicBall";
import messages from "./Messages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MagicBall messages={messages} />
    </div>
  );
}

export default App;

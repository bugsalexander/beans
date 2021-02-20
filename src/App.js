import logo from "./logo.svg";
import { Beans } from "./components/Beans";
import "./App.css";

function App({ age }) {
  return (
    <div className="App">
      <Beans name="mr bean" age={2048 * 2}/>
      <SomeText />
      <SomeText />
      <SomeText />
    </div>
  );
}

function SomeText() {
  return <p>hello, this is some text!</p>;
}

export default App;

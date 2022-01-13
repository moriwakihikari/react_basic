import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HelloReact from "./components/HelloReact";
import CountUpDown from "./components/CountUpDown";

function App() {
  const rootElement = document.getElementById("root");
  render (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HelloReact />} />
        <Route path="count-up-down" element={<CountUpDown />} />
      </Routes>
    </BrowserRouter>,
  rootElement
  );
}
export default App;
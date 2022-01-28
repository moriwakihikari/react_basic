import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import axios from 'axios';
import HelloReact from "./components/HelloReact";
import CountUpDown from "./components/CountUpDown";
import SignUp from "./components/account/SignUp";
import SignIn from "./components/account/SignIn";
import SignOut from "./components/account/SignOut";
import Show from "./components/account/Show";
import Delete from "./components/account/Delete";

axios.defaults.withCredentials = true;
function App() {
  const rootElement = document.getElementById("root");
  render (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HelloReact />} />
        <Route path="count-up-down" element={<CountUpDown />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-out" element={<SignOut />} />
        <Route path="show/:id" element={<Show />} />
        <Route path="delete/:id" element={<Delete />} />
      </Routes>
    </BrowserRouter>,
  rootElement
  ); {
    return(
    <></>
    );
  }
}
export default App;
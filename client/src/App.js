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
import Account from "./components/account/Account";
import { Provider } from 'react-redux'
import store from './store'


axios.defaults.withCredentials = true;
function App() {
  const rootElement = document.getElementById("root");
  render (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HelloReact />} />
          <Route path="count-up-down" element={<CountUpDown />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-out" element={<SignOut />} />
          <Route path="show/:id" element={<Show />} />
          <Route path="delete/:id" element={<Delete />} />
          <Route path="account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </Provider>,
  rootElement
  ); {
    return(
    <></>
    );
  }
}
export default App;
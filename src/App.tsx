import { Provider } from "react-redux";

import "./App.css";
import store from "./store";
import {Home} from "./page/HomePage";
function App() {
  return (
    <Provider store={store}>
      <Home></Home>
    </Provider>
  );
}

export default App;

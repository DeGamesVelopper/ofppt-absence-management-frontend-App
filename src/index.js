import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import sotre from "./store";

import App from "./App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={sotre}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./redux/reducers/configureStore";
import { Provider } from "react-redux";

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="portfolio">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

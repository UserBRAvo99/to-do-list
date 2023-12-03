import ReactDOM from "react-dom/client";

import { store } from "./redux/store.js";

import App from "./App.jsx";
import Global from "./Global.js";
import { Provider } from "react-redux";
// import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <ThemeProvider theme={classicTheme}> */}
    <App />
    {/* </ThemeProvider> */}
    <Global />
  </Provider>
);

import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./routes/routes.jsx";
import store from "./Store/store.js";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);

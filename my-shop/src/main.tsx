import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { store } from "./State/store.ts";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    
     <BrowserRouter>
     <App />
     </BrowserRouter>
    
  </Provider>
);

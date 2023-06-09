import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthContextProvider>
    <Router>
      <App />
    </Router>
  </AuthContextProvider>
);

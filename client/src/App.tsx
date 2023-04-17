import { Routes, Route } from "react-router-dom";

import Nav from "./components/nav/Nav";
import SignIn from "./components/signIn/SignIn";
import Register from "./components/register/Register";

import { GlobalStyle } from "./components/App.style";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;

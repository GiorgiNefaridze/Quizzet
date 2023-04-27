import { Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import SignIn from "./components/signIn/SignIn";
import Register from "./components/register/Register";
import { AuthContext } from "./context/AuthContext";

import { GlobalStyle } from "./App.style";

const App = () => {
  const { isAuth } = AuthContext();

  return (
    <ChakraProvider>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={isAuth?.status ? <Home /> : <Navigate to="/signin" />}
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;

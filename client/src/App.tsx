import { Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import SignIn from "./components/signIn/SignIn";
import Register from "./components/register/Register";
import Quiz from "./components/quiz/Quiz";
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
        <Route path="/quiz" element={!isAuth?.status ? <SignIn /> : <Quiz />} />
        <Route
          path="/signin"
          element={!isAuth?.status ? <SignIn /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!isAuth?.status ? <Register /> : <Navigate to="/" />}
        />
      </Routes>
    </ChakraProvider>
  );
};

export default App;

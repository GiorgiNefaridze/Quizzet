import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Nav from "./components/nav/Nav";
import SignIn from "./components/signIn/SignIn";
import Register from "./components/register/Register";

import { GlobalStyle } from "./components/App.style";

const App = () => {
  return (
    <ChakraProvider>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;

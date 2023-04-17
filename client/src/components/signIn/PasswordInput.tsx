import { useState } from "react";
import { InputGroup, Input, Button, InputRightElement } from "@chakra-ui/react";

const PasswordInput = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="lg" style={{ width: "100%" }}>
      <Input
        size="lg"
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
      />
      <InputRightElement style={{ width: "20%" }}>
        <Button h="2.2rem" size="lg" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
export default PasswordInput;

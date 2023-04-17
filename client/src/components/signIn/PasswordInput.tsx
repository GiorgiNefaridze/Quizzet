import { useState } from "react";
import { InputGroup, Input, Button, InputRightElement } from "@chakra-ui/react";

import { IProps } from "./Types";

const PasswordInput = ({ registerInp, errors }: IProps) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="lg" style={{ width: "100%" }}>
      <Input
        size="lg"
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
        {...registerInp}
        style={{
          border: errors ? "1px solid red" : "1px solid black",
        }}
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

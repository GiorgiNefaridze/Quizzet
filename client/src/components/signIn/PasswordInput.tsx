import { useState } from "react";
import { InputGroup, Input, Button } from "@chakra-ui/react";

import { IProps } from "./Types";
import { PasswordInpt } from "./SignIn.style";

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
      <PasswordInpt>
        <Button h="2.2rem" size="lg" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </PasswordInpt>
    </InputGroup>
  );
};
export default PasswordInput;

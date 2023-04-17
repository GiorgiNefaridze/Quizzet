import { FC } from "react";
import { Input, Button, Stack } from "@chakra-ui/react";

import { FormWrapper } from "../signIn/SignIn.style";

const Register: FC = () => {
  return (
    <FormWrapper>
      <form>
        <h2>Register🚀</h2>
        <Stack spacing={5}>
          <Input placeholder="Enter name" size="lg" />
          <Input placeholder="Enter email" size="lg" />
          <Input placeholder="Enter password" size="lg" />
        </Stack>
        <Stack direction="row" spacing={4}>
          <Button
            isLoading={false}
            loadingText="Submitting"
            style={{ gap: "0 10px" }}
            variant="outline"
          >
            Register
          </Button>
        </Stack>
      </form>
    </FormWrapper>
  );
};

export default Register;

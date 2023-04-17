import { FC } from "react";
import { Input, Button, Stack } from "@chakra-ui/react";

import PasswordInput from "./PasswordInput";

import { FormWrapper } from "./SignIn.style";

const SignIn: FC = () => {
  return (
    <FormWrapper>
      <form>
        <h2>Sign In🔥</h2>
        <Stack spacing={5}>
          <Input placeholder="Enter email" size="lg" />
          <PasswordInput />
        </Stack>
        <Stack direction="row" spacing={4}>
          <Button
            isLoading={false}
            loadingText="Submitting"
            style={{ gap: "0 10px" }}
            variant="outline"
          >
            Sign in
          </Button>
        </Stack>
      </form>
    </FormWrapper>
  );
};

export default SignIn;

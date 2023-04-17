import { FC } from "react";
import { Input, Button, Stack } from "@chakra-ui/react";

import PasswordInput from "./PasswordInput";

import { SignInWrapper } from "./SignIn.style";

const SignIn: FC = () => {
  return (
    <SignInWrapper>
      <form>
        <h2>Sign In🔥</h2>
        <Stack spacing={5}>
          <Input placeholder="Enter email" size="lg" />
          <PasswordInput />
        </Stack>
        <Stack direction="row" spacing={4}>
          <Button isLoading={false} loadingText="Submitting" variant="outline">
            Sign in
          </Button>
        </Stack>
      </form>
    </SignInWrapper>
  );
};

export default SignIn;

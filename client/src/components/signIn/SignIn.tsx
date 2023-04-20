import { FC } from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Stack, Link, Text } from "@chakra-ui/react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import PasswordInput from "./PasswordInput";
import { REQUIRED_VALIDATION } from "../../CONSTANTS";
import { IForm } from "./Types";
import { useSignIn } from "../../hooks/useSignIn";

import SignInSvg from "../../../public/sign_in.svg";
import { FormWrapper } from "./SignIn.style";

const SignIn: FC = () => {
  const { signIn } = useSignIn();
  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<IForm>();

  const submitForm = (data: IForm) => {
    toast.promise(signIn(data), {
      loading: "Saving...",
      success: "Successfully logged in🫡",
      error: ({
        response: {
          data: { error },
        },
      }) => error,
    });
  };

  const handleClick = () => {
    navigate("/register");
  };

  return (
    <FormWrapper>
      <img src={SignInSvg} alt="sign in" title="sign in" />
      <form onSubmit={handleSubmit(submitForm)}>
        <h2>Sign In🔥</h2>
        <Stack spacing={5}>
          <Input
            placeholder="Enter email"
            size="lg"
            {...register("email", {
              required: { value: true, message: REQUIRED_VALIDATION },
            })}
            style={{
              border: errors?.email?.message?.length
                ? "1px solid red"
                : "1px solid black",
            }}
          />
          {errors?.email?.message && <h3>{errors?.email?.message}</h3>}
          <PasswordInput
            registerInp={{
              ...register("password", {
                required: { value: true, message: REQUIRED_VALIDATION },
              }),
            }}
            errors={errors?.password?.message}
          />
          {errors?.password?.message && <h3>{errors?.password?.message}</h3>}
        </Stack>
        <Text>
          Don't have an account?
          <Link color="red" onClick={handleClick}>
            Register here...
          </Link>
        </Text>
        <Stack direction="row" spacing={4}>
          <Button
            isLoading={false}
            loadingText="Submitting"
            style={{ gap: "0 10px" }}
            variant="outline"
            type="submit"
          >
            Sign in
          </Button>
        </Stack>
      </form>
      <Toaster />
    </FormWrapper>
  );
};

export default SignIn;

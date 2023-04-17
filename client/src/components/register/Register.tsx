import { FC } from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Stack, Text, Link } from "@chakra-ui/react";

import { REQUIRED_VALIDATION } from "../../CONSTANTS";
import { IForm } from "./Types";

import { FormWrapper } from "../signIn/SignIn.style";

const Register: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>();

  const submitForm = (data: IForm) => {
    console.log("registered", data);
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(submitForm)}>
        <h2>Register🚀</h2>
        <Stack spacing={5}>
          <Input
            placeholder="Enter name"
            size="lg"
            {...register("name", {
              required: { value: true, message: REQUIRED_VALIDATION },
            })}
          />
          {errors?.name?.message && <h3>{errors?.name?.message}</h3>}
          <Input
            placeholder="Enter email"
            size="lg"
            {...register("email", {
              required: { value: true, message: REQUIRED_VALIDATION },
            })}
          />
          {errors?.email?.message && <h3>{errors?.email?.message}</h3>}
          <Input
            placeholder="Enter password"
            size="lg"
            {...register("password", {
              required: { value: true, message: REQUIRED_VALIDATION },
            })}
          />
          {errors?.password?.message && <h3>{errors?.password?.message}</h3>}
        </Stack>
        <Text>
          Already have an account?
          <Link color="red" href="/signin">
            Sign in...
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
            Register
          </Button>
        </Stack>
      </form>
    </FormWrapper>
  );
};

export default Register;

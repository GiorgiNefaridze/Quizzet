import { FC } from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Stack, Text, Link } from "@chakra-ui/react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useRegister } from "../../hooks/useRegister";
import { REQUIRED_VALIDATION } from "../../CONSTANTS";
import { IForm } from "./Types";

import RegisterSvg from "../../../public/register.svg";
import { FormButton, FormText, FormWrapper } from "../signIn/SignIn.style";

const Register: FC = () => {
  const { registerFn } = useRegister();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>();

  const submitForm = async (data: IForm) => {
    toast.promise(registerFn(data), {
      loading: "Loading...",
      success: ({ data: { response } }) => response,
      error: ({ response: { data } }) => data?.error,
    });

    reset({ email: "", password: "", name: "" });
  };

  const handleClick = () => {
    navigate("/signin");
  };

  return (
    <FormWrapper>
      <img src={RegisterSvg} alt="register" title="register" />
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
            type="password"
            size="lg"
            {...register("password", {
              required: { value: true, message: REQUIRED_VALIDATION },
            })}
          />
          {errors?.password?.message && <h3>{errors?.password?.message}</h3>}
        </Stack>
        <FormText>
          Already have an account?
          <Link color="red" onClick={handleClick}>
            Sign in...
          </Link>
        </FormText>
        <FormButton direction="row" spacing={4}>
          <Button
            isLoading={false}
            loadingText="Submitting"
            style={{ gap: "0 10px" }}
            variant="outline"
            type="submit"
          >
            Register
          </Button>
        </FormButton>
      </form>
      <Toaster />
    </FormWrapper>
  );
};

export default Register;

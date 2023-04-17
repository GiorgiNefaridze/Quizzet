import { useForm } from "react-hook-form";

export interface IForm {
  email: string;
  password: string;
}

export interface IProps {
  registerInp: ReturnType<typeof useForm>;
  errors: string;
}

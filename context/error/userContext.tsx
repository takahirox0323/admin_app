import { createContext } from "react";

type User = {
  isLoading: boolean;
  onChangeError: (isError: boolean) => void;
  onChangeErrorMessage: (error: string) => void;
  error: string;
};
const stub = () => {};

const initialContext = {
  onChangeError: stub,
  onChangeErrorMessage: stub,
  isLoading: true,
  error: "",
};

export const ErrorContext = createContext<User>(initialContext);

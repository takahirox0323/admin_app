import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { ErrorContext } from "@/context/error/userContext";
import { Snackbar } from "@/Components/atoms/SnackBar";

type Props = {
  children: React.ReactChild;
};
const defaultValue = {
  userName: "",
  name: "",
  email: "",
  roleTypeId: undefined,
  branchId: undefined,
};

export const ErrorProvider = ({ children }: Props): JSX.Element => {
  const [isLoading, setLoading] = useState<boolean>();
  const [show, setShow] = useState<boolean>();
  const [isError, setError] = useState<boolean>(false);
  const [error, setErrorMessage] = useState<string>("");

  const onChangeError = (isError: boolean) => {
    setError(isError);
  };
  const onChangeErrorMessage = (error: string) => {
    setErrorMessage(error);
    setShow(true);
  };

  return (
    <ErrorContext.Provider
      value={{ isLoading, onChangeError, error, onChangeErrorMessage }}
    >
      <Snackbar
        type="error"
        data={error}
        message="データの取得に失敗しました"
      />

      {children}
    </ErrorContext.Provider>
  );
};

// function GlobalLoadingIndicator() {
//   const isFetching = useIsFetching();
//   return isFetching ? <CircularProgress /> : null;
// }

/*
- loading している場合
- loadingが完了後、サーバーエラーで取得できなかった場合
- データが存在していなかった場合
- データを取得できた場合
*/

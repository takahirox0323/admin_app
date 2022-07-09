import React, { useState, useEffect, Children } from "react";
import { Snackbar as SnackBarComponent } from "@mui/material";
import { Alert } from "@mui/material";

type Props = {
  message?: string;
  type: "error" | "success";
  children?: React.ReactChild;
  data?: any;
};

export const Snackbar: React.FC<Props> = ({
  message = "保存に成功しました",
  type,
  data,
}): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const onChangeHandler = () => {
    setShow(false);
  };

  useEffect(() => {
    setShow(true);
    return () => {
      setShow(false);
    };
  }, [data]);

  switch (type) {
    case "error":
      return (
        <SnackBarComponent
          open={show}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          onClose={onChangeHandler}
          message={message}
        >
          <Alert variant="filled" severity="error">
            {message}
          </Alert>
        </SnackBarComponent>
      );
    case "success":
      return (
        <SnackBarComponent
          open={show}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          onClose={onChangeHandler}
        >
          <Alert variant="filled" severity="success">
            {message}
          </Alert>
        </SnackBarComponent>
      );

    default:
      break;
  }
};

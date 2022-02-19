import React from "react";
import Button from "@mui/material/Button";
import * as yup from "yup";
import { useState, useEffect, useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import { Typography } from "@mui/material";
import { Spacer } from "@/Components/Layout/Spacer";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import { BranchRequest } from "@/types/branch";

type Props = {
  onClickOK: (body: BranchRequest) => void;
  onClickCancel: () => void;
  handleClose: () => void;
  isOpen: boolean;
  desc: String;
};

export const Modal: React.FC<Props> = ({
  onClickOK,
  onClickCancel,
  isOpen,
  handleClose,
  desc,
}) => {
  const initialValues = {
    name: "",
  };

  const [formInitialValues, setFormInitialValues] = useState(initialValues);
  const validationSchema = yup.object().shape({
    userName: yup.string().required("入力されていません"),
    password: yup
      .string()
      .max(15, "Must be 15 characters or less")
      .required("入力されていません"),
  });

  const formik = useFormik({
    initialValues: formInitialValues,
    enableReinitialize: true,
    validationSchema,
    onSubmit: async () => onClickOK(formInitialValues),
  });

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {desc}
              <Typography>ユーザー名</Typography>
              <input
                onChange={formik.handleChange}
                value={formik.values.name}
                name="name"
                style={{ height: 40, width: "100%" }}
              />
              {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
              ) : null}
              <Spacer size={48} vertical />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Tooltip title="キャンセル">
              <Button
                variant="outlined"
                onClick={onClickCancel}
                sx={{
                  boxShadow: "unset",
                }}
                autoFocus
              >
                キャンセル
              </Button>
            </Tooltip>

            <button type="submit">Submit</button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

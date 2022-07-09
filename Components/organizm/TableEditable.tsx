import { usePostPark } from "@/hooks";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Box, Dialog, TextField, Typography } from "@mui/material";
import { Spacer } from "@/Components/Layout/Spacer";
import Tooltip from "@mui/material/Tooltip";

import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Snackbar } from "../atoms/SnackBar";
import * as yup from "yup";
import { Formik, useFormik, Field, Form } from "formik";
import Router from "next/router";

export const TableEditable = (props) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const validationSchema = yup.object().shape({
    name: yup.string().required("入力されていません"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console;
    },
  });

  const onChangeModal = () => {
    Router.push("/BranchRegister");
  };

  return (
    <>
      <Box display="flex" justifyContent="flex-start">
        <Tooltip title="削除">
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            onClick={onChangeModal}
            sx={{
              boxShadow: "unset",
            }}
          >
            新規登録
          </Button>
        </Tooltip>
        <Spacer size={8} />
        <Tooltip title="登録">
          <Button
            startIcon={<DeleteIcon />}
            variant="outlined"
            sx={{
              border: "1px solid #dc3545",
              background: "#fff",
              color: "#dc3545",
              boxShadow: "unset",
              "&:hover": {
                border: "1px solid #dc3545",
              },
            }}
          >
            削除
          </Button>
        </Tooltip>
      </Box>

      {/* //モーダル */}
      {/* <Dialog open={isDialogOpen} onClose={onChangeModal} fullScreen>
        <Box padding="20px">
          <Typography variant="h4">新しく支社を登録する</Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Dialog> */}
    </>
  );
};

import React, { useContext, useRef, useState, createContext } from "react";
import styled from "@emotion/styled";
import * as yup from "yup";
import Router from "next/router";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  Alert,
  Badge,
  createTheme,
  Grid,
  Menu,
  Rating,
  Stack,
  TextField,
  ThemeProvider,
} from "@mui/material";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import AppsIcon from "@mui/icons-material/Apps";
import { useFormik } from "formik";
import { Spacer } from "@/Components/Layout/Spacer";

const Login: React.FC = () => {
  const initialValues = {
    password: "",
    userName: "",
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
    onSubmit: async (values) => await Router.push("/"),
  });

  return (
    <Box sx={{ display: "flex", height: "100vh", background: "#e2e9f7" }}>
      <Grid container gridTemplateColumns="1fr 1fr">
        <Grid item md={6} sm={0} xs={0}></Grid>
        <Grid item xs={12} sm={8} md={6} display="flex">
          <Box
            sx={{
              background: "#fff",
              margin: "48px 80px 48px 48px",
              flex: 1,
              borderRadius: 2,
            }}
          >
            <Box sx={{ padding: "24px 56px 40px", width: 520 }}>
              <Box display="flex" alignItems="center">
                <AppsIcon sx={{ color: "#5787D0", width: 100, height: 100 }} />
                <Box
                  sx={{
                    fontSize: 40,
                    lineHeight: "38px",
                    letterSpacing: "0.35px",
                    fontWeight: 600,
                    color: "#5787D0",
                  }}
                >
                  Admin Manager
                </Box>
              </Box>
              <Spacer size={48} vertical />
              <form onSubmit={formik.handleSubmit}>
                <Typography>ユーザー名</Typography>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.userName}
                  name="userName"
                  style={{ height: 40, width: "100%" }}
                />
                {formik.touched.userName && formik.errors.userName ? (
                  <div>{formik.errors.userName}</div>
                ) : null}
                <Spacer size={48} vertical />
                <Typography>パスワード</Typography>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  name="password"
                  style={{ height: 40, width: "100%" }}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}

                <Spacer size={48} vertical />
                <button type="submit">Submit</button>
              </form>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;

const Wrapper = styled.div`
  background: #fafafd;
  min-height: 100vh;
`;

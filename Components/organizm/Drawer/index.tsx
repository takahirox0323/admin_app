import React from "react";
import { Drawer as DrawerComponent, Typography } from "@mui/material";
import Box from "@mui/material/Box";

type Props = { onChangeModal: () => void };

export const Drawer = (props) => {
  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    props.onChangeModal();
  };

  const list = () => (
    <Box
      sx={{
        background: "#fff",
        boxShadow:
          "0px 8px 10px -5px rgb(0 0 0 / 20%), 0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%)",
        height: "100%",
        borderRadius: 3,
      }}
      role="presentation"
    >
      <Box
        padding={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderBottom="1px solid #ddd"
      >
        <Typography variant={"h6"} fontWeight="600">
          お知らせ
        </Typography>
      </Box>
    </Box>
  );

  return (
    <DrawerComponent
      anchor={"top"}
      open={props.isOpen}
      onClose={() => props.onChangeModal()}
      ModalProps={{
        BackdropProps: { invisible: true },
        sx: { width: "400px" },
      }}
      PaperProps={{
        sx: {
          width: "400px",
          top: 0,
          right: 20,
          left: "unset",
          bottom: "unset",
          height: "100%",
          background: "unset",
          boxShadow: "unset",
          padding: "20px",
          paddingTop: "60px",
        },
      }}
    >
      {list()}
    </DrawerComponent>
  );
};

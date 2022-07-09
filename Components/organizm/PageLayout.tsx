import { useCallback, useEffect, useState } from "react";
import { Branch } from "@/types/branch";
import type { NextPage } from "next";
import { ReactQuery } from "@/Components/Layout/ReactQuery";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { Header } from "@/Components/organizm/Header";
import { Sidebar } from "@/Components/organizm/Sidebar";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { Spacer } from "../Layout/Spacer";
import AppsIcon from "@mui/icons-material/Apps";
import { useParkList, usePostSite } from "@/hooks";

export const PageLayout: React.FC = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { branchList } = useParkList();
  const [isOpen, setClose] = useState(true);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleDialogModal = () => {
    setDialogOpen(!isDialogOpen);
  };

  const onChangeModal = () => {
    setClose(!isOpen);
  };

  return (
    <>
      <Box sx={{ height: "100%", width: "100%" }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            height: "54px",
            background: "#fff",
            borderBottom: "1px solid #d4d8dd",
            padding: "8px 8px",
          }}
        >
          <Box display="flex" alignItems="center">
            <AppsIcon sx={{ color: "#5787D0" }} />
            <Spacer size={12} />
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: "bold",
                padding: "12px 0",
                color: "#5787D0",
              }}
              color="#c9c9c9"
            >
              ABC COMPANY
            </Typography>
          </Box>
          <Box display="flex">
            <NotificationsRoundedIcon
              sx={{ color: "#727272", fontSize: "30px" }}
            />
            <Spacer size={12} />
            <AccountCircleRoundedIcon
              sx={{ color: "#727272", fontSize: "30px" }}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", height: "calc(100% - 54px)" }}>
          <Sidebar isOpen={isOpen} />
          {children}
        </Box>
      </Box>
    </>
  );
};

/* <Sidebar isOpen={isOpen} /> */

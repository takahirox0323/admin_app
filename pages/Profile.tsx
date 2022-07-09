import { useCallback, useEffect, useState } from "react";
import { Branch } from "@/types/branch";
import type { NextPage } from "next";
import { ReactQuery } from "@/Components/Layout/ReactQuery";
import Button from "@mui/material/Button";
import { Box, Paper, Typography } from "@mui/material";
import { Header } from "@/Components/organizm/Header";
import { Spacer } from "@/Components/Layout/Spacer";

import { Alert, createTheme, Grid, Stack, ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";

import { SimpleTable } from "@/Components/organizm/Table";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessIcon from "@mui/icons-material/Business";
import StoreTwoToneIcon from "@mui/icons-material/StoreTwoTone";
import { PageLayout } from "@/Components/organizm/PageLayout";
import { UserInformation } from "@/Components/template/Profile/UserProfile";
import { useParkList } from "@/hooks";
type Props = {
  // branchList?: Branch[];
};

export const Profile: NextPage = () => {
  return (
    <ReactQuery>
      <ProfilePage />
    </ReactQuery>
  );
};

const ProfilePage: React.FC = () => {
  const [isOpen, setClose] = useState(true);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleDialogModal = () => {
    setDialogOpen(!isDialogOpen);
  };

  const onChangeModal = () => {
    setClose(!isOpen);
  };

  return (
    <PageLayout>
      <Container
        maxWidth={false}
        sx={{
          background: "#e2e9f7",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "scroll",
        }}
      >
        <Box
          height={200}
          sx={{ background: "#3353CC", margin: "0 -24px" }}
        ></Box>

        <Grid marginTop="-80px" container spacing={2}>
          <Grid item xs={12} md={3}>
            <UserInformation />
          </Grid>
          <Grid item xs={12} md={9}>
            <Paper
              sx={{
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: 3,
                paddingBottom: "24px",
              }}
            ></Paper>
          </Grid>
        </Grid>
      </Container>
    </PageLayout>
  );
};

export default Profile;

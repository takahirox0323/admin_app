import { useParkList, usePostPark } from "@/hooks";
import { useContext, useEffect, useState, useRef } from "react";
import type { NextPage } from "next";
import { Spacer } from "@/Components/Layout/Spacer";
import Container from "@mui/material/Container";
import { SimpleTable } from "@/Components/organizm/Table";
import { PageLayout } from "@/Components/organizm/PageLayout";
import {
  Box,
  CircularProgress,
  Tooltip,
  Typography,
  Button,
  Divider,
  TextField,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { getPhoto } from "@/hooks/photo";
import { AdminParkDetail } from "@/Components/organizm/admin/ParkDetail";

const Branches: NextPage = () => {
  return <BranchPage />;
};

const BranchPage: React.FC = () => {
  return (
    <>
      <PageLayout>
        <Container
          disableGutters={true}
          maxWidth={false}
          sx={{
            padding: "24px 12px",
            background: "#e2e9f7",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h3"
              fontSize="24px"
              letterSpacing="1px"
              color="#6f6f6f"
              fontWeight="600"
            >
              公園詳細
            </Typography>
          </Box>

          <Spacer vertical size={16} />
          <Divider />
          <Spacer vertical size={16} />
          <Paper sx={{ padding: 2 }}>
            <AdminParkDetail />
          </Paper>
        </Container>
      </PageLayout>
    </>
  );
};

export default Branches;

import { useFetchSite } from "@/hooks";
import { useCallback, useEffect, useState } from "react";
import type { NextPage } from "next";
import { ReactQuery } from "@/Components/Layout/ReactQuery";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { Header } from "@/Components/organizm/Header";
import { Spacer } from "@/Components/Layout/Spacer";
import { Sidebar } from "@/Components/organizm/Sidebar";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import { AlertDialog } from "@/Components/organizm/Dialog";
import { SimpleTable } from "@/Components/organizm/Table";
import { PageLayout } from "@/Components/organizm/PageLayout";

const Home: NextPage = () => {
  return (
    <ReactQuery>
      <Homes />
    </ReactQuery>
  );
};

const Homes: React.FC = () => {
  const { branchList } = useFetchSite();
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
      <Box display="flex" flexDirection="column">
        <h1>ダッシュボードです</h1>
      </Box>
    </PageLayout>
  );
};

export default Home;

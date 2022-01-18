import { useFetchSite } from "@/hooks";
import { useCallback, useEffect, useState } from "react";
import { Branch } from "@/types/branch";
import type { NextPage } from "next";
import { ReactQuery } from "@/Components/Layout/ReactQuery";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { Header } from "@/Components/organizm/Header";
import { Sidebar } from "@/Components/organizm/Sidebar";

export const PageLayout: React.FC = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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
    <>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Sidebar isOpen={isOpen} />
        <Box display="flex" flexDirection="column" flexGrow={1}>
          <Header onChangeModal={onChangeModal} />
          {children}
        </Box>
      </Box>
    </>
  );
};

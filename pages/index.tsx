import { useFetchSite } from "@/hooks";
import { useCallback, useEffect, useState } from "react";
import type { NextPage } from "next";
import { ReactQuery } from "@/Components/Layout/ReactQuery";
import { Box, Container, Typography } from "@mui/material";
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
      <Container
        maxWidth={false}
        sx={{
          padding: 2,
          background: "#e2e9f7",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>ダッシュボード</h1>
      </Container>
    </PageLayout>
  );
};

export default Home;

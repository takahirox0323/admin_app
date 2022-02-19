import { useFetchSite, usePostSite } from "@/hooks";
import { useContext, useEffect, useState } from "react";
import type { NextPage } from "next";
import { Spacer } from "@/Components/Layout/Spacer";
import Container from "@mui/material/Container";
import { SimpleTable } from "@/Components/organizm/Table";
import { PageLayout } from "@/Components/organizm/PageLayout";
import { Snackbar } from "@/Components/atoms/SnackBar";
import { PanList } from "@/Components/atoms/PanList";
import { TableEditable } from "@/Components/organizm/TableEditable";
import { ErrorProvider } from "@/context/error/userProvider";
import { ErrorContext } from "@/context/error/userContext";
import { Box, CircularProgress } from "@mui/material";
import { Loading } from "@/Components/organizm/Loading";

const Branches: NextPage = () => {
  return <BranchPage />;
};

const BranchPage: React.FC = () => {
  const { isError, isLoading, branchList } = useFetchSite();

  return (
    <>
      <PageLayout>
        <Container
          maxWidth={false}
          sx={{
            padding: 2,
            background: "#e2e9f7",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <PanList />
          <Spacer size={16} vertical />
          <TableEditable />
          <Spacer size={16} vertical />
          <SimpleTable branchList={branchList} isLoading={isLoading} />
        </Container>
      </PageLayout>
    </>
  );
};

export default Branches;

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


const Branches: NextPage = () => {
  return (
    <ReactQuery>
      <BranchPage />
    </ReactQuery>
  );
};

const BranchPage: React.FC = () => {
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
          <Box
            sx={{
              background: "#fff",
              height: "36px",
              padding: "8px 24px",
              fontSize: 14,
              color: "#444444",
            }}
          >
            支社一覧>関東支社
          </Box>
          <Container
                     maxWidth={false}
            sx={{
              padding: 2,
              background: "#e2e9f7",
              flexGrow: 1,
              display:"flex",
              flexDirection:"column"
            }}
          >
              <Box display="flex" justifyContent="flex-end" >
                <Tooltip title="登録">
                  <Button
                    variant="contained"
                    onClick={handleDialogModal}
                    sx={{
                      boxShadow: "unset",
                    }}
                  >
                    登録する
                    <AlertDialog
                handleDialogModal={handleDialogModal}
                isDialogOpen={isDialogOpen}
              />
                  </Button>
                </Tooltip>
              </Box>
            <Spacer size={16} vertical/>
            <Box display="flex" flex={1}>
              <SimpleTable branchList={branchList} />
            </Box>
          </Container>
        </PageLayout>

  );
};

export default Branches;

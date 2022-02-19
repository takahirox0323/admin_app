import { useFetchSite } from "@/hooks";
import { useCallback, useEffect, useState } from "react";
import type { NextPage } from "next";
import { ReactQuery } from "@/Components/Layout/ReactQuery";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { Spacer } from "@/Components/Layout/Spacer";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import { SimpleTable } from "@/Components/organizm/Table";
import { PageLayout } from "@/Components/organizm/PageLayout";


const Users: NextPage = () => {
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
             <h1>ユーザー一覧</h1>
          </Container>
        </PageLayout>
  );
};

export default Users;

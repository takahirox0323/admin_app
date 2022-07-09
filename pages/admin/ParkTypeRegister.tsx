import { useState } from "react";
import type { NextPage } from "next";
import { Spacer } from "@/Components/Layout/Spacer";
import Container from "@mui/material/Container";
import { PageLayout } from "@/Components/organizm/PageLayout";
import { Box, Typography, Button, Divider } from "@mui/material";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { useParkList, usePostParkType } from "@/hooks";
import { ParkTypeRequest } from "@/types/branch";

const Branches: NextPage = () => {
  return <BranchPage />;
};

const BranchPage: React.FC = () => {
  const { isError, isLoading, parkList } = useParkList();

  const [park, setPark] = useState<ParkTypeRequest>();
  const usePostPark_ = usePostParkType(park);
  const onChangePark = ({ key, value }: { key: string; value: string }) => {
    setPark((prev) => {
      return { ...prev, [key]: value, createdUserId: "1" };
    });
  };

  const onSubmit = () => {
    usePostPark_.mutate();
  };

  return (
    <>
      <PageLayout>
        <Container
          disableGutters={true}
          maxWidth={false}
          sx={{
            overflow: "scroll",
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
              公園登録
            </Typography>
          </Box>

          <Spacer vertical size={16} />
          <Divider />
          <Spacer vertical size={16} />

          <Paper>
            <form>
              <Box padding={2} display="flex" flexDirection="column">
                <p>公園タイプ名</p>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  onChange={(e) =>
                    onChangePark({ key: "name", value: e.target.value })
                  }
                />
                <Spacer vertical size={36} />
                <Button onClick={onSubmit} variant="contained">
                  Send
                </Button>
              </Box>
            </form>
          </Paper>

          <Spacer vertical size={16} />
        </Container>
      </PageLayout>
    </>
  );
};

export default Branches;

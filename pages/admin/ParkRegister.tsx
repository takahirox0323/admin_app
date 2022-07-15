import type { NextPage } from "next";
import { Spacer } from "@/Components/Layout/Spacer";
import Container from "@mui/material/Container";
import { PageLayout } from "@/Components/organizm/PageLayout";
import { Box, Typography, Button, Divider } from "@mui/material";
import Paper from "@mui/material/Paper";
import { ParkRegister } from "@/Components/organizm/admin/ParkRegister";

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
              <ParkRegister />
            </form>
          </Paper>
          <Spacer vertical size={16} />
        </Container>
      </PageLayout>
    </>
  );
};

export default Branches;

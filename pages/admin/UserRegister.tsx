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
import {
  Box,
  CircularProgress,
  Tooltip,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { Loading } from "@/Components/organizm/Loading";
import AddIcon from "@mui/icons-material/Add";
import { SelectBox } from "@/Components/organizm/Search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MultipleSelectChip from "@/Components/Molecules/SelectChip";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { useParkList, usePostPark, usePostUser } from "@/hooks";
import { ParkRequest, UserRequest } from "@/types/branch";

const Branches: NextPage = () => {
  return <BranchPage />;
};

const BranchPage: React.FC = () => {
  const [user, setUser] = useState<UserRequest>();
  const usePostUser_ = usePostUser(user);
  const onChangePark = ({
    key,
    value,
  }: {
    key: string;
    value: string | number;
  }) => {
    setUser((prev) => {
      return { ...prev, [key]: value, createdUserId: "1" };
    });
  };

  const onSubmit = async () => {
    await usePostUser_.mutate();
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
              ユーザー登録
            </Typography>
          </Box>

          <Spacer vertical size={16} />
          <Divider />
          <Spacer vertical size={16} />

          <Paper>
            <form>
              <Box padding={2} display="flex" flexDirection="column">
                <p>姓名</p>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  onChange={(e) =>
                    onChangePark({ key: "familyName", value: e.target.value })
                  }
                />
                <Spacer vertical size={24} />
                <p>名前</p>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  onChange={(e) =>
                    onChangePark({ key: "givenName", value: e.target.value })
                  }
                />
                <Spacer vertical size={24} />
                <p>姓別</p>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  onChange={(e) =>
                    onChangePark({
                      key: "sexId",
                      value: Number(e.target.value),
                    })
                  }
                />
                <Spacer vertical size={24} />
                <p>年齢</p>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  onChange={(e) =>
                    onChangePark({ key: "age", value: Number(e.target.value) })
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

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

import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { useParkList, usePostPark } from "@/hooks";
import { ParkRequest } from "@/types/branch";

const Branches: NextPage = () => {
  return <BranchPage />;
};

const BranchPage: React.FC = () => {
  const { isError, isLoading, parkList } = useParkList();

  const [park, setPark] = useState<ParkRequest>();
  const usePostPark_ = usePostPark(park);

  const onChangePark = ({ key, value }: { key: string; value: string }) => {
    setPark((prev) => {
      return { ...prev, [key]: value, createdUserId: "1", parkStatusId: 1 };
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
                <p>公園名</p>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  onChange={(e) =>
                    onChangePark({ key: "name", value: e.target.value })
                  }
                />
                <Spacer vertical size={24} />
                <p>住所</p>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  onChange={(e) =>
                    onChangePark({ key: "address", value: e.target.value })
                  }
                />
                <Spacer vertical size={24} />
                <p>公園詳細</p>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  onChange={(e) =>
                    onChangePark({ key: "description", value: e.target.value })
                  }
                />
                <Spacer vertical size={24} />
                <p>都道府県</p>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  onChange={(e) =>
                    onChangePark({ key: "prefectureId", value: e.target.value })
                  }
                />
                <Spacer vertical size={24} />
                <p>地域</p>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  onChange={(e) =>
                    onChangePark({ key: "areaId", value: e.target.value })
                  }
                />
                <Spacer vertical size={24} />
                <p>公園タイプ</p>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  onChange={(e) =>
                    onChangePark({ key: "parkTypeId", value: e.target.value })
                  }
                />
                <Spacer vertical size={24} />
                <p>国</p>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  onChange={(e) =>
                    onChangePark({ key: "countryId", value: e.target.value })
                  }
                />

                <Spacer vertical size={24} />
                <p>サイトURL</p>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  onChange={(e) =>
                    onChangePark({ key: "parkUrl", value: e.target.value })
                  }
                />
                <Spacer vertical size={24} />
                <p>開演時間</p>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  onChange={(e) =>
                    onChangePark({ key: "openingTime", value: e.target.value })
                  }
                />
                <Spacer vertical size={24} />
                <p>料金</p>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  onChange={(e) =>
                    onChangePark({ key: "price", value: e.target.value })
                  }
                />
                <Spacer vertical size={24} />
                <p>タグ</p>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  onChange={(e) =>
                    onChangePark({ key: "tagId", value: e.target.value })
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

import { useFetchSite, usePostSite } from "@/hooks";
import { useCallback, useEffect, useState } from "react";
import type { NextPage } from "next";
import { ReactQuery } from "@/Components/Layout/ReactQuery";
import Button from "@mui/material/Button";
import { Alert, Box, LinearProgress, Typography } from "@mui/material";
import { Spacer } from "@/Components/Layout/Spacer";
import Container from "@mui/material/Container";
import { SimpleTable } from "@/Components/organizm/Table";
import { PageLayout } from "@/Components/organizm/PageLayout";
import { Snackbar } from "@/Components/atoms/SnackBar";
import { PanList } from "@/Components/atoms/PanList";
import { TableEditable } from "@/Components/organizm/TableEditable";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const Branches: NextPage = () => {
  return <BranchPage />;
};

const BranchPage: React.FC = () => {
  const { branchList, isError, isLoading } = useFetchSite();
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {isError && (
        <Snackbar
          type="error"
          data={branchList}
          message="データの取得に失敗しました"
        />
      )}
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
          <Box padding={1.5} paddingX={0}>
            <Typography
              variant="h3"
              fontSize="14px"
              fontWeight="600"
              color="#5a5a5a"
            >
              支社を新しく登録
            </Typography>
          </Box>
          <Box
            display="flex"
            borderRadius={2}
            sx={{ background: "#fff" }}
            flex={1}
            padding={2}
            width="100%"
            flexDirection="column"
          >
            <Box padding={2} paddingX={0} height={40}>
              <Typography
                variant="h3"
                fontSize="20px"
                fontWeight="600"
                color="#5a5a5a"
              >
                支社を新しく登録
              </Typography>
            </Box>
            <Spacer size={16} vertical />
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="基本情報" value="1" />
                    <Tab label="予備情報①" value="2" />
                    <Tab label="予備情報②" value="3" />
                  </TabList>
                </Box>
                <TabPanel value="1">基本情報</TabPanel>
                <TabPanel value="2">予備情報①</TabPanel>
                <TabPanel value="3">予備情報②</TabPanel>
              </TabContext>
            </Box>
          </Box>
          <Spacer size={16} vertical />
        </Container>
      </PageLayout>
    </>
  );
};

export default Branches;

// function GlobalLoadingIndicator() {
//   const isFetching = useIsFetching();
//   return isFetching ? <CircularProgress /> : null;
// }

/*
- loading している場合
- loadingが完了後、サーバーエラーで取得できなかった場合
- データが存在していなかった場合
- データを取得できた場合
*/

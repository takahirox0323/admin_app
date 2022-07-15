import { useParkList, usePostPark } from "@/hooks";
import { useContext, useEffect, useState, useRef } from "react";
import type { NextPage } from "next";
import { Spacer } from "@/Components/Layout/Spacer";
import Container from "@mui/material/Container";
import { SimpleTable } from "@/Components/organizm/Table";
import { PageLayout } from "@/Components/organizm/PageLayout";
import {
  Box,
  CircularProgress,
  Tooltip,
  Typography,
  Button,
  Divider,
  TextField,
} from "@mui/material";
import { Loading } from "@/Components/organizm/Loading";
import AddIcon from "@mui/icons-material/Add";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { ParkTable } from "@/Components/organizm/admin/ParkTable";

const Branches: NextPage = () => {
  return <BranchPage />;
};

const BranchPage: React.FC = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <>
      <PageLayout>
        <Container
          disableGutters={true}
          maxWidth={false}
          sx={{
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
              公園一覧
            </Typography>

            <Tooltip title="削除">
              <Link href="/admin/ParkRegister">
                <Button
                  startIcon={<AddIcon />}
                  variant="contained"
                  sx={{
                    boxShadow: "unset",
                  }}
                >
                  新規登録
                </Button>
              </Link>
            </Tooltip>
          </Box>

          <Spacer vertical size={16} />
          <Divider />
          <Spacer vertical size={16} />

          <Box display="flex" alignItems="center">
            <Typography variant="body1" sx={{ fontSize: 12 }}>
              ステータス
            </Typography>
            <Spacer size={4} />
            <Select
              sx={{ width: 120, height: 40 }}
              value={age}
              onChange={handleChange}
              inputProps={{ "aria-label": "Without label" }}
              placeholder="公園の絞り込み"
            >
              <MenuItem value={10}>すべて</MenuItem>
              <MenuItem value={20}>承認済</MenuItem>
              <MenuItem value={30}>申請中</MenuItem>
            </Select>
            <Spacer size={16} />

            <Typography variant="body1" sx={{ fontSize: 12 }}>
              公園タイプ
            </Typography>
            <Spacer size={4} />
            <Select
              sx={{ width: 120, height: 40 }}
              value={age}
              onChange={handleChange}
              inputProps={{ "aria-label": "Without label" }}
              placeholder="公園タイプ"
            >
              <MenuItem value={10}>すべて</MenuItem>
              <MenuItem value={20}>国立公園</MenuItem>
              <MenuItem value={30}>都市公園</MenuItem>
            </Select>
            <Spacer size={36} />
            <Paper
              component="form"
              color="#fafafa"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 240,
                boxShadow: "unset",
                borderRadius: "8px",
                height: "40px",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="検索"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
          <Spacer vertical size={16} />
          <ParkTable />
        </Container>
      </PageLayout>
    </>
  );
};

export default Branches;

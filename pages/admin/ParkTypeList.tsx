import { useParkList, useParkTypeList, usePostPark } from "@/hooks";
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
  TextField,
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
import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { parkTypeListColumns } from "@/Components/organizm/Tables/park";
import Link from "next/link";

const ParkTypeListPage: NextPage = () => {
  return <ParkTypeList />;
};

const ParkTypeList: React.FC = () => {
  const { isError, isLoading, parkTypeList } = useParkTypeList();
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
              公園タイプ一覧
            </Typography>

            <Tooltip title="新規登録">
              <Link href="/admin/ParkTypeRegister">
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

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <MultipleSelectChip />
            <Spacer size={16} />

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
          <SimpleTable
            branchList={parkTypeList?.data}
            isLoading={isLoading}
            columns={parkTypeListColumns}
          />
        </Container>
      </PageLayout>
    </>
  );
};

export default ParkTypeListPage;

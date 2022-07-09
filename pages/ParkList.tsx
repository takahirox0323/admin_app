import { useCallback, useEffect, useState, useRef } from "react";
import type { NextPage } from "next";
import { ReactQuery } from "@/Components/Layout/ReactQuery";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { PageLayout } from "@/Components/organizm/PageLayout";
import Image from "next/image";
import { BoxScreenSize } from "@/Components/Layout/BoxScreenSize";
import { Header } from "@/Components/organizm/Header";
import { Footer } from "@/Components/organizm/Footer";
import { Search } from "@/Components/organizm/Search";
import { Spacer } from "@/Components/Layout/Spacer";
import { TAGS } from "@/apis";
import Top from "@/assets/top.png";
import { MainSide } from "@/Components/organizm/MainSide";
import { Tag, Tags } from "@/Components/atoms/Tag";
import { Thumbnail } from "@/Components/atoms/Thumbnail";
import ParkRoundedIcon from "@mui/icons-material/ParkRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useParkList } from "@/hooks";

const AREA = [
  { name: "北海道", prefectures: [] },
  {
    name: "東北",
    prefectures: [{ name: "青森" }, { name: "岩手" }, { name: "青森" }],
  },
  { name: "関東" },
  { name: "中部・北部" },
  { name: "関西" },
  { name: "中国・四国" },
  { name: "九州・沖縄" },
];

const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 6, 7, 8, 9, 10];

const Home: NextPage = () => {
  return (
    <ReactQuery>
      <ParkList />
    </ReactQuery>
  );
};

const ParkList: React.FC = () => {
  const [type, setType] = useState<string>("");
  const [isDialogOpen, setDialogOpen] = useState(false);

  return (
    <Box flexDirection="column" height={"100%"} display="flex">
      <Header />
      <Spacer vertical size={80} />
      <Spacer size={24} vertical />
      <BoxScreenSize sx={{ position: "relative" }} flexGrow={0}>
        <Button
          startIcon={<LocationOnRoundedIcon sx={{ color: "#52bf90" }} />}
          variant="contained"
          onClick={() => console.log()}
          sx={{
            height: "42px",
            boxShadow: "unset",
            background: "#fff",
            color: "#52bf90",
            border: "1px solid #d0cfcf",
            borderRadius: "30px",
          }}
        >
          すべての場所
        </Button>
        <Spacer size={16} />
        <Button
          startIcon={<ParkRoundedIcon sx={{ color: "#52bf90" }} />}
          variant="contained"
          onClick={() => console.log()}
          sx={{
            height: "42px",

            boxShadow: "unset",
            background: "#fff",
            color: "#52bf90",
            border: "1px solid #d0cfcf",
            borderRadius: "30px",
          }}
        >
          すべての場所
        </Button>
        <Spacer size={16} />
        <Button
          startIcon={<ParkRoundedIcon sx={{ color: "#52bf90" }} />}
          variant="contained"
          onClick={() => console.log()}
          sx={{
            height: "42px",

            boxShadow: "unset",
            background: "#fff",
            color: "#52bf90",
            border: "1px solid #d0cfcf",
            borderRadius: "30px",
          }}
        >
          すべての場所
        </Button>
      </BoxScreenSize>
      <Spacer size={20} vertical />
      <BoxScreenSize
        sx={{ position: "relative" }}
        flexGrow={0}
        alignItems={"flex-end"}
      >
        <Typography
          fontSize={28}
          fontWeight={600}
          variant="h2"
          letterSpacing={1}
        >
          すべての公園
        </Typography>
        <Box display="flex" alignItems="flex-end" marginBottom="2px">
          <Spacer size={24} />
          <Typography fontSize={14} variant="h2" letterSpacing={1}>
            検索結果
          </Typography>
          <Spacer size={8} />
          <Typography
            fontSize={22}
            variant="h2"
            letterSpacing={1}
            marginBottom="-2px"
          >
            47
          </Typography>
          <Spacer size={8} />
          <Typography fontSize={14} variant="h2" letterSpacing={1}>
            件
          </Typography>
        </Box>
      </BoxScreenSize>
      <Spacer size={24} vertical />
      <BoxScreenSize sx={{ position: "relative", display: "inline" }}>
        <Grid
          container
          spacing={2.5}
          columns={{ xs: 12, sm: 12, md: 12 }}
          flexGrow={0}
        >
          {dummy.map((card) => {
            return (
              <Grid item xs={3} sm={3} md={3}>
                <Stack spacing={1}>
                  <Skeleton
                    variant="rectangular"
                    height={"250px"}
                    animation="wave"
                  />
                  <Skeleton variant="text" animation="wave" />
                  <Skeleton variant="text" animation="wave" width={"60px"} />
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </BoxScreenSize>
      <Footer />
    </Box>
  );
};

export default Home;

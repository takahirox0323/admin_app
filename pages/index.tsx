import { useFetchSite } from "@/hooks";
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

const Home: NextPage = () => {
  return (
    <ReactQuery>
      <Homes />
    </ReactQuery>
  );
};

const Homes: React.FC = () => {
  const { branchList } = useFetchSite();
  const [type, setType] = useState<string>("");
  const [isDialogOpen, setDialogOpen] = useState(false);

  const CARD = ["1", "2", "3"];
  const CATEGORY = ["1", "2", "3", "4", "5"];
  const TYPEOFPARK = ["1", "2", "3", "4", "5", "5"];

  const SectionTitle = ({ name }) => {
    return (
      <Box display="flex" justifyContent="space-between" alignItems="baseline">
        <Typography
          variant="h1"
          fontSize="22px"
          fontWeight="600"
          letterSpacing={0.8}
        >
          {name}
        </Typography>
        <Box>すべて</Box>
      </Box>
    );
  };

  return (
    <Box>
      <Header />
      <Spacer vertical size={80} />
      <Search />
      <Spacer size={110} vertical />
      <BoxScreenSize sx={{ position: "relative" }}>
        <Grid container spacing={2.5}>
          <Grid item xs="auto">
            <MainSide />
          </Grid>
          <Grid item xs>
            {/* 各都道府県の公園 */}
            <SectionTitle name="東京都の公園" />
            <Spacer size={24} vertical />
            <Grid container spacing={2.5} columns={{ xs: 4, sm: 8, md: 12 }}>
              {CARD.map((card) => {
                return (
                  <Grid item xs={2} sm={4} md={4}>
                    <Box
                      display="flex"
                      sx={{ paddingTop: "100%", background: "#ccc" }}
                      position="relative"
                      width="100%"
                      height={0}
                    >
                      <Box
                        position="absolute"
                        top={0}
                        width="100%"
                        height="100%"
                        borderRadius={1}
                        overflow="hidden"
                      >
                        <Image
                          src={Top}
                          objectFit="cover"
                          layout="fill"
                          loading="lazy"
                        />
                      </Box>
                    </Box>
                    <Spacer size={12} vertical />
                    <Typography
                      variant="h2"
                      fontSize="16px"
                      letterSpacing={0.5}
                      overflow="hidden"
                      noWrap
                    >
                      noWrapnoWrapnoWrapnoWrapnoWrap
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
            <Spacer size={48} vertical />

            {/* //人気のカテゴリー */}
            <SectionTitle name="人気のカテゴリから探す" />
            <Spacer size={24} vertical />
            <Grid container spacing={2.5} columns={{ xs: 10, sm: 10, md: 10 }}>
              {CATEGORY.map((card) => {
                return (
                  <Grid item xs={2} sm={2} md={2}>
                    <Thumbnail />
                  </Grid>
                );
              })}
            </Grid>
            <Spacer size={16} vertical />
            <Tags array={AREA} />
            <Spacer size={48} vertical />

            {/* //公園の種類から探す */}
            <SectionTitle name="公園の種類から探す" />
            <Spacer size={24} vertical />
            <Grid container spacing={2.5} columns={{ xs: 9, sm: 9, md: 9 }}>
              {TYPEOFPARK.map((card) => {
                return (
                  <Grid item xs={3} sm={3} md={3}>
                    <Thumbnail height={250} />
                  </Grid>
                );
              })}
            </Grid>
            <Spacer size={16} vertical />
            <Tags array={AREA} />
          </Grid>
          <Spacer size={48} vertical />
        </Grid>
      </BoxScreenSize>
      <Footer />
    </Box>
  );
};

export default Home;

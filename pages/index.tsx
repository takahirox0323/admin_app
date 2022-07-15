import type { NextPage } from "next";
import { Box, Grid } from "@mui/material";
import { BoxScreenSize } from "@/Components/Layout/BoxScreenSize";
import { Header } from "@/Components/organizm/Header";
import { Footer } from "@/Components/organizm/Footer";
import { Search } from "@/Components/organizm/Search";
import { Spacer } from "@/Components/Layout/Spacer";
import { MainSide } from "@/Components/organizm/MainSide";
import { ParkSearchSection } from "@/Components/organizm/home/ParkSearchSection";
import { PopularParkSection } from "@/Components/organizm/home/PopularParkSection";

const Home: NextPage = () => {
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
            {/* //公園の種類から探す */}
            <ParkSearchSection />
            <Spacer size={48} vertical />

            {/* //人気のカテゴリー */}
            <PopularParkSection />
            <Spacer size={48} vertical />

            {/* //公園の種類から探す */}
            <ParkSearchSection />
          </Grid>
          <Spacer size={48} vertical />
        </Grid>
      </BoxScreenSize>
      <Footer />
    </Box>
  );
};

export default Home;

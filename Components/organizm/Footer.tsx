import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { PageLayout } from "@/Components/organizm/PageLayout";
import Image from "next/image";
import { BoxScreenSize } from "@/Components/Layout/BoxScreenSize";
import { Spacer } from "@/Components/Layout/Spacer";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export const Footer: React.FC = () => {
  return (
    <Box
      display="block"
      height="300px"
      width="100%"
      style={{ background: "#52BF90" }}
      minWidth="1100px"
    >
      <BoxScreenSize height="100%">
        <Box
          width="100%"
          padding={3}
          paddingTop={4}
          paddingBottom={0}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Grid container spacing={2.5} columns={{ xs: 12, sm: 12, md: 12 }}>
            <Grid item xs={3} sm={3} md={3}></Grid>
            <Grid item xs={3} sm={3} md={3}></Grid>
            <Grid item xs={2} sm={2} md={2}></Grid>
            <Grid item xs={2} sm={2} md={2}>
              <Typography
                variant="h2"
                fontSize="16px"
                letterSpacing={0.9}
                overflow="hidden"
                sx={{ color: "#fff" }}
                fontWeight="600"
                noWrap
              >
                公園を探す
              </Typography>
              <Spacer size={20} vertical />
              <Typography
                variant={"h3"}
                letterSpacing={0.9}
                overflow="hidden"
                sx={{ color: "#fff", fontSize: "14px", opacity: 0.8 }}
                noWrap
              >
                すべての公園一覧
              </Typography>
              <Spacer size={16} vertical />
              <Typography
                variant={"h3"}
                letterSpacing={0.9}
                overflow="hidden"
                sx={{ color: "#fff", fontSize: "14px", opacity: 0.8 }}
                noWrap
              >
                東京都の公園一覧
              </Typography>
              <Spacer size={16} vertical />
              <Typography
                variant={"h3"}
                letterSpacing={0.9}
                overflow="hidden"
                sx={{ color: "#fff", fontSize: "14px", opacity: 0.8 }}
                noWrap
              >
                大阪の公園一覧
              </Typography>
            </Grid>
            <Grid item xs={2} sm={2} md={2}>
              <Typography
                variant="h2"
                fontSize="16px"
                letterSpacing={0.9}
                overflow="hidden"
                sx={{ color: "#fff" }}
                fontWeight="600"
                noWrap
              >
                本サービスについて
              </Typography>
              <Spacer size={20} vertical />
              <Typography
                variant={"h3"}
                letterSpacing={0.9}
                overflow="hidden"
                sx={{ color: "#fff", fontSize: "14px", opacity: 0.8 }}
                noWrap
              >
                パークルについて
              </Typography>
              <Spacer size={16} vertical />
              <Typography
                variant={"h3"}
                letterSpacing={0.9}
                overflow="hidden"
                sx={{ color: "#fff", fontSize: "14px", opacity: 0.8 }}
                noWrap
              >
                　お問い合わせ
              </Typography>
              <Spacer size={16} vertical />
              <Typography
                variant={"h3"}
                letterSpacing={0.9}
                overflow="hidden"
                sx={{ color: "#fff", fontSize: "14px", opacity: 0.8 }}
                noWrap
              >
                　利用規約
              </Typography>
            </Grid>
          </Grid>

          <Box
            height="60px"
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ borderTop: "1px solid #fff" }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <AddRoundedIcon sx={{ color: "#fff" }} />
              <Spacer size={15} />
              <AddRoundedIcon sx={{ color: "#fff" }} />
              <Spacer size={15} />
              <AddRoundedIcon sx={{ color: "#fff" }} />
            </Box>
            <Typography
              variant={"h3"}
              letterSpacing={0.9}
              overflow="hidden"
              sx={{ color: "#fff", fontSize: "14px", opacity: 0.8 }}
              noWrap
            >
              ©2020 Parkr, Inc.
            </Typography>
          </Box>
        </Box>
      </BoxScreenSize>
    </Box>
  );
};

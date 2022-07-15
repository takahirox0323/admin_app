import { Grid, Box, Typography } from "@mui/material";
import { Spacer } from "@/Components/Layout/Spacer";
import { Thumbnail } from "@/Components/atoms/Thumbnail";
import { SectionTitle } from "./SectionTitle";
import Image from "next/image";
import Top from "@/assets/top.png";

export const ParkSearchSection: React.FC = () => {
  const CARD = ["1", "2", "3"];
  return (
    <>
      {/* //公園の種類から探す */}
      <SectionTitle name="東京都の公園" />
      <Spacer size={24} vertical />
      <Grid container spacing={2.5} columns={{ xs: 12, sm: 12, md: 12 }}>
        {CARD.map((card) => {
          return (
            <Grid item xs={4} sm={4} md={4}>
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
    </>
  );
};

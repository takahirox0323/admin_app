import Top from "@/assets/top.png";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

type Props = {
  name?: string;
  height?: number;
};

export const Thumbnail: React.FC<Props> = ({ name, height }) => {
  return (
    <Box
      display="flex"
      sx={{ paddingTop: height ? "50%" : "100%", background: "#ccc" }}
      position="relative"
      width="100%"
      height={0}
    >
      <Box
        position="absolute"
        top={0}
        width={"100%"}
        height="100%"
        borderRadius={1}
        overflow="hidden"
      >
        <Image src={Top} objectFit="cover" layout="fill" loading="lazy" />
      </Box>
      <Typography
        variant="h2"
        fontSize="16px"
        letterSpacing={0.5}
        overflow="hidden"
        noWrap
        position="absolute"
        color="#fff"
        zIndex={2}
        sx={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        夜景がきれい
      </Typography>
    </Box>
  );
};

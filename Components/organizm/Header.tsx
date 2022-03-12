import { useFetchSite } from "@/hooks";
import { useCallback, useEffect, useState } from "react";
import type { NextPage } from "next";
import { Box, Button, Container, Typography } from "@mui/material";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { Spacer } from "@/Components/Layout/Spacer";
import { BoxScreenSize } from "@/Components/Layout/BoxScreenSize";

export const Header: React.FC = () => {
  return (
    <Box
      display="flex"
      position="fixed"
      left={0}
      top={0}
      width="100%"
      zIndex={1}
      sx={{ background: "#fff" }}
    >
      <BoxScreenSize sx={{ padding: 0 }}>
        <Box
          display="flex"
          flex={1}
          alignItems="center"
          position="relative"
          sx={{ margin: "0 auto" }}
        >
          {/* Nav左 */}
          <Box
            height={"80px"}
            display="flex"
            flex={1}
            alignItems="center"
            sx={{ alignItem: "center" }}
          >
            <Image src={Logo} width="120px" height="40px" />
          </Box>

          {/* Nav右 */}
          <Box display="flex">
            <Button
              variant="contained"
              onClick={() => console.log()}
              sx={{
                boxShadow: "unset",
                background: "#52bf90",
              }}
            >
              新規登録
            </Button>
            <Spacer size={16} />
            <Button
              variant="contained"
              onClick={() => console.log()}
              sx={{
                boxShadow: "unset",
                background: "#fff",
                color: "#52bf90",
                border: "1px solid #52bf90",
              }}
            >
              ログイン
            </Button>
          </Box>
          <Box
            display="flex"
            position="absolute"
            sx={{ transform: "translateX(-50%)", left: "50%" }}
          >
            <Typography fontSize={14}>ホーム</Typography>
            <Spacer size={16} />
            <Typography fontSize={14}>サービスについて</Typography>
            <Spacer size={16} />
            <Typography fontSize={14}>公園を探す</Typography>
          </Box>
        </Box>
      </BoxScreenSize>
    </Box>
  );
};

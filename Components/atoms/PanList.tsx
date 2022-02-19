import React from "react";
import { Box } from "@mui/material";
import { Alert, LinearProgress, Typography } from "@mui/material";

type Props = {
  size?: number;
  vertical?: boolean;
  style?: React.CSSProperties;
};

export const PanList: React.FC<Props> = ({ size, vertical, style }) => {
  const width = vertical ? "100%" : size;
  const height = vertical ? size : 1;
  return (
    <Box padding={1.5} paddingX={0}>
      <Typography variant="h3" fontSize="14px" fontWeight="600" color="#5a5a5a">
        支社を新しく登録
      </Typography>
    </Box>
  );
};

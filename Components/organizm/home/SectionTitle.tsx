import { Box, Typography } from "@mui/material";

export const SectionTitle = ({ name }) => {
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

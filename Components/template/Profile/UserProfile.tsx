import { Box, Paper, Typography } from "@mui/material";
import { Header } from "@/Components/organizm/Header";
import { Spacer } from "@/Components/Layout/Spacer";

import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";

export const UserInformation: React.FC = () => {
  return (
    <Paper
      sx={{
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 3,
        paddingBottom: "24px",
      }}
    >
      <Box width={160} height={160} margin={3} sx={{ position: "relative" }}>
        <Box
          width={160}
          height={160}
          borderRadius={100}
          sx={{ background: "#ddd" }}
        />
        <Box
          width={40}
          height={40}
          borderRadius={100}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            position: "absolute",
            background: "#3353CC",
            right: 0,
            bottom: 1,
            border: "3px solid #fff",
          }}
        >
          <CameraAltRoundedIcon fontSize="small" sx={{ color: "#fff" }} />
        </Box>
      </Box>

      <Typography fontSize={18}>山田太郎</Typography>
      <Spacer vertical size={40} />
      <Box
        height={40}
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ background: "#F2F4F8", padding: "0 24px" }}
      >
        <Typography color="#C9CACB" fontSize={14}>
          誕生日
        </Typography>
        <Typography color="#5E5F64" fontSize={14} fontWeight="bold">
          1994/03/23
        </Typography>
      </Box>
      <Box
        height={40}
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ background: "#fff", padding: "0 24px" }}
      >
        <Typography color="#C9CACB" fontSize={14}>
          Email
        </Typography>
        <Typography color="#5E5F64" fontSize={14} fontWeight="bold">
          test@gmail.com
        </Typography>
      </Box>
      <Box
        height={40}
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ background: "#F2F4F8", padding: "0 24px" }}
      >
        <Typography color="#C9CACB" fontSize={14}>
          電話番号
        </Typography>
        <Typography color="#5E5F64" fontSize={14} fontWeight="bold">
          09029153323
        </Typography>
      </Box>
      <Box
        height={40}
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ background: "#fff", padding: "0 24px" }}
      >
        <Typography color="#C9CACB" fontSize={14}>
          連絡先
        </Typography>
        <Typography color="#5E5F64" fontSize={14} fontWeight="bold">
          -
        </Typography>
      </Box>
    </Paper>
  );
};

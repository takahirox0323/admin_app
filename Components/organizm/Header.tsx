import type { NextPage } from "next";
import * as React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { Spacer } from "@/Components/Layout/Spacer";
import { BoxScreenSize } from "@/Components/Layout/BoxScreenSize";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

export const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [login, setLoginOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);
  return (
    <Box
      display="flex"
      position="fixed"
      left={0}
      top={0}
      width="100%"
      zIndex={1}
      borderBottom="1px solid #d5d2cd"
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
              onClick={handleOpen}
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
              onClick={handleLoginOpen}
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "#fff",
            borderRadius: "8px",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            新規登録をしよう
          </Typography>
          <Spacer size={16} vertical />
          <TextField
            id="outlined-basic"
            label="メールアドレス"
            variant="filled"
            sx={{ width: "100%" }}
          />
          <Spacer size={16} vertical />
          <TextField
            id="outlined-basic"
            label="パスワード"
            variant="outlined"
            sx={{ width: "100%" }}
          />
          <Spacer size={16} vertical />
          <TextField
            id="outlined-basic"
            label="確認用パスワード"
            variant="outlined"
            sx={{ width: "100%" }}
          />
          <Spacer size={16} vertical />
          <TextField
            id="outlined-basic"
            label="ユーザー名"
            variant="outlined"
            sx={{ width: "100%" }}
          />
          <Spacer size={16} vertical />
          <Typography fontSize={12}>
            登録することで、利用規約とプライバシーポリシーに同意したものとみなされます。
          </Typography>
          <Spacer size={16} vertical />
          <Button
            variant="contained"
            onClick={() => console.log()}
            sx={{
              boxShadow: "unset",
              background: "#fff",
              color: "#52bf90",
              border: "1px solid #52bf90",
              width: "100%",
            }}
          >
            ログイン
          </Button>
        </Box>
      </Modal>

      <Modal
        open={login}
        onClose={handleLoginClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "#fff",
            borderRadius: "8px",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            ログイン
          </Typography>
          <Spacer size={16} vertical />
          <TextField
            id="outlined-basic"
            label="メールアドレス"
            variant="filled"
            sx={{ width: "100%" }}
          />
          <Spacer size={16} vertical />
          <TextField
            id="outlined-basic"
            label="パスワード"
            variant="outlined"
            sx={{ width: "100%" }}
          />

          <Spacer size={16} vertical />
          <Typography fontSize={12}>
            登録することで、利用規約とプライバシーポリシーに同意したものとみなされます。
          </Typography>
          <Spacer size={16} vertical />
          <Button
            variant="contained"
            onClick={() => console.log()}
            sx={{
              boxShadow: "unset",
              background: "#fff",
              color: "#52bf90",
              border: "1px solid #52bf90",
              width: "100%",
            }}
          >
            ログイン
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

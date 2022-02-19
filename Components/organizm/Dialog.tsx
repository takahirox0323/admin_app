import React from "react";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type Props = {
  onClickOK: () => void;
  onClickCancel: () => void;
  handleClose: () => void;
  isOpen: boolean;
  desc: String;
};

export const Modal: React.FC<Props> = ({
  onClickOK,
  onClickCancel,
  isOpen,
  handleClose,
  desc,
}) => {
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {desc}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClickCancel}>Disagree</Button>
          <Button onClick={onClickOK} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

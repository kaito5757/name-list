import { ButtonType, IconType } from "@/types";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import { ComponentProps, Fragment } from "react";

interface BasicDialogProps extends ComponentProps<"div"> {
  dialogTriggerType: ButtonType | IconType;
  title: string;
  channelButtonText: string;
  submitButtonText: string;
  onSubmitClick?: () => void;
}

export default function BasicDialog(props: BasicDialogProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitButton = () => {
    handleClose();
    props.onSubmitClick && props.onSubmitClick();
  };

  return (
    <Fragment>
      {props.dialogTriggerType.type === "button" && (
        <Button variant="outlined" onClick={handleClickOpen}>
          {props.dialogTriggerType.text}
        </Button>
      )}
      {props.dialogTriggerType.type === "icon" && (
        <IconButton onClick={handleClickOpen}>
          <props.dialogTriggerType.icon />
        </IconButton>
      )}
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>{props.children}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{props.channelButtonText}</Button>
          <Button onClick={handleSubmitButton}>{props.submitButtonText}</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

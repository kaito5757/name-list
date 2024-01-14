import { ButtonType, IconType } from "@/types";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ComponentProps, Fragment, useState } from "react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormReset,
} from "react-hook-form";

interface FormDialogProps<T extends FieldValues> extends ComponentProps<"div"> {
  dialogTriggerType: ButtonType | IconType;
  title: string;
  channelButtonText: string;
  submitButtonText: string;
  handleSubmit: UseFormHandleSubmit<T, undefined>;
  reset: UseFormReset<T>;
  formData: (data: T) => void;
}

export default function FormDialog<T extends FieldValues>(
  props: FormDialogProps<T>,
) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.reset();
  };

  const onSubmit = props.handleSubmit((data: T) => {
    props.formData(data);
    handleClose();
    props.reset();
  });

  return (
    <Fragment>
      {props.dialogTriggerType.type === "button" && (
        <Button variant="outlined" onClick={handleClickOpen}>
          { props.dialogTriggerType.text }
        </Button>
      )}
      {props.dialogTriggerType.type === "icon" && (
        <IconButton onClick={handleClickOpen} aria-label="icon">
          <props.dialogTriggerType.icon />
        </IconButton>
      )}
      <Dialog open={open} onClose={handleClose} fullWidth>
        <form onSubmit={onSubmit}>
          <DialogTitle>{props.title}</DialogTitle>
          <DialogContent>{props.children}</DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>{props.channelButtonText}</Button>
            <Button type="submit">{props.submitButtonText}</Button>
          </DialogActions>
        </form>
      </Dialog>
    </Fragment>
  );
}

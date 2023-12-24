import { Stack, Snackbar, Alert } from "@mui/material";
import { AlertColor } from "@mui/material/Alert";
import { create } from "zustand";

type basicSnackbarStore = {
  open: boolean;
  severity: AlertColor;
  message: string;
};

type basicSnackbarActions = {
  setOpen: (open: boolean) => void;
  setSeverity: (severity: AlertColor) => void;
  setMessage: (message: string) => void;
  setSnackbar: (severity: AlertColor, message: string) => void;
};

export const useBasicSnackbarStore = create<
  basicSnackbarStore & basicSnackbarActions
>((set) => ({
  open: false,
  severity: "success",
  message: "",
  setOpen: (open: boolean) => set(() => ({ open })),
  setSeverity: (severity: AlertColor) => set(() => ({ severity })),
  setMessage: (message: string) => set(() => ({ message })),
  setSnackbar: (severity: AlertColor, message: string) =>
    set(() => ({ open: true, severity, message })),
}));

export default function BasicSnackbar() {
  const { open, severity, message, setOpen } = useBasicSnackbarStore();

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

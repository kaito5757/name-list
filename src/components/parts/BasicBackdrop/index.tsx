import { Backdrop, CircularProgress } from "@mui/material";
import { create } from "zustand";

type basicBackdropStore = {
  open: boolean;
};

type basicBackdropActions = {
  setOpen: (open: boolean) => void;
};

export const useBasicBackdropStore = create<
  basicBackdropStore & basicBackdropActions
>((set) => ({
  open: false,
  setOpen: (open: boolean) => set(() => ({ open })),
}));

export default function BasicBackdrop() {
  const open = useBasicBackdropStore((state) => state.open);

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

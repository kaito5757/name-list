import { trpc } from "@/utils/trpc";
import { Box, SxProps, Theme } from "@mui/material";

const css: {
  userContainer: SxProps<Theme>;
  userRow: SxProps<Theme>;
} = {
  userContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  userRow: {
    overflowX: "auto",
    margin: "-0.375rem",
    width: "75%",
    "@media (min-width: 640px)": { width: "50%" },
  },
};

export default function User() {
  const userList = trpc.user.findUserAll.useQuery();

  return (
    <Box component="div" sx={css.userContainer}>
      <Box component="div" sx={css.userRow}>
        {userList.data?.map((user) => {
          return <p key={user.id}>{user.full_name}</p>;
        })}
      </Box>
    </Box>
  );
}

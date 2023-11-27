import { SxProps, Theme } from "@mui/material";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import type { TopComboBoxSelectOption } from "@/types";
import { useState } from "react";

interface TopComboBoxProps extends React.ComponentPropsWithoutRef<"div"> {
  selectOptions: TopComboBoxSelectOption[];
  placeholderText: string;
  noOptionsText: string;
  handleChange: (id: number) => void;
}

type CssTypes = {
  box: SxProps<Theme>;
  autocomplete: SxProps<Theme>;
};

const css: CssTypes = {
  box: {
    display: "flex",
    justifyContent: "center",
  },
  autocomplete: {
    width: "50%",
  },
};

export default function TopComboBox(props: TopComboBoxProps) {
  const [id, setId] = useState<number>(0);
  const filterOptions = createFilterOptions({
    stringify: (option: TopComboBoxSelectOption) =>
      Object.values(option).slice(1).join(" "),
  });

  return (
    <Box component="div" sx={css.box}>
      <Autocomplete
        filterOptions={filterOptions}
        disablePortal
        id="top-combo-box"
        options={props.selectOptions}
        sx={css.autocomplete}
        renderInput={(params) => (
          <TextField {...params} label={props.placeholderText} />
        )}
        noOptionsText={props.noOptionsText}
        value={props.selectOptions.find((option) => option.id === id) ?? null}
        onChange={(_, comboBoxInfo) => {
          if (comboBoxInfo != null) {
            setId(comboBoxInfo.id);
            props.handleChange(comboBoxInfo.id);
          }
        }}
        onInputChange={(_, inputValue) => {
          if (!inputValue) {
            setId(0);
            props.handleChange(0);
          }
        }}
      />
    </Box>
  );
}

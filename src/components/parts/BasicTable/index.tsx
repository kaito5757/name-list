import { TableCollType, TableRowType } from "@/types";
import {
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
} from "@mui/material";
import { ComponentProps } from "react";

interface BasicTableProps extends ComponentProps<"div"> {
  tableHeadCollAry: TableCollType[];
  tableBodyRowAry: TableRowType[];
}

const css: {
  tableContainer: SxProps<Theme>;
} = {
  tableContainer: { borderRadius: "0.5rem", borderWidth: "1px", marginTop: 1 },
};

export default function BasicTable(props: BasicTableProps) {
  return (
    <TableContainer sx={css.tableContainer}>
      <Table>
        <TableHead>
          <TableRow>
            {props.tableHeadCollAry.map((coll, index) => (
              <TableCell key={index} sx={coll.collCss}>
                {coll.collChild}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.tableBodyRowAry.map((row, index) => (
            <TableRow key={index}>
              {row.tableCollAry.map((coll, index) => (
                <TableCell key={index} sx={coll.collCss}>
                  {coll.collChild}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

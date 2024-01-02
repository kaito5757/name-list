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
import {
  ComponentProps,
  Dispatch,
  DragEvent,
  SetStateAction,
  useState,
} from "react";

interface DndBasicTableProps<T> extends ComponentProps<"div"> {
  tableHeadCollAry: TableCollType[];
  tableBodyRowAry: TableRowType[];
  setTableData: Dispatch<SetStateAction<T>>;
  updateTableOrder: () => void;
}

const css: {
  tableContainer: SxProps<Theme>;
} = {
  tableContainer: { borderRadius: "0.5rem", borderWidth: "1px", marginTop: 1 },
};

export default function DndBasicTable<T>(props: DndBasicTableProps<T>) {
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  const dragStart = (event: DragEvent<HTMLTableRowElement>, index: number) => {
    setDragIndex(index);
    const dragIconEle = event.currentTarget.children[0] as HTMLTableCellElement;
    const offsetX = dragIconEle.offsetWidth / 2;
    const offsetY = event.currentTarget.offsetHeight / 2;
    event.dataTransfer.setDragImage(event.currentTarget, offsetX, offsetY);
  };

  const dragEnter = (index: number) => {
    if (index === dragIndex) return;
    props.setTableData((prevState) => {
      const newDepartments = JSON.parse(JSON.stringify(prevState));
      const deleteEle = newDepartments.splice(dragIndex, 1)[0];
      newDepartments.splice(index, 0, deleteEle);
      return newDepartments;
    });
    setDragIndex(index);
  };

  const dragOver = (event: DragEvent<HTMLTableRowElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const dragLeave = (event: DragEvent<HTMLTableRowElement>) => {
    event.currentTarget.style.cursor = "default";
  };

  const dragEnd = (event: DragEvent<HTMLTableRowElement>) => {
    event.currentTarget.style.cursor = "default";
    props.updateTableOrder();
    setDragIndex(null);
  };

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
            <TableRow
              key={index}
              onDragStart={(event) => dragStart(event, index)}
              onDragEnter={() => dragEnter(index)}
              onDragLeave={(event) => dragLeave(event)}
              onDragOver={(event) => dragOver(event)}
              onDragEnd={(event) => dragEnd(event)}
            >
              {row.tableCollAry.map((coll, index) => (
                <TableCell
                  key={index}
                  sx={coll.collCss}
                  draggable={index === 0}
                >
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

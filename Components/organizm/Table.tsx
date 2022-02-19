import React, { useMemo, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Branch } from "@/types/branch";
import { DataGrid } from "@mui/x-data-grid";
import { Box, CircularProgress } from "@mui/material";
import { Loading } from "@/Components/organizm/Loading";

type Props = {
  branchList: Branch[];
  isLoading?: boolean;
};

const TABLE_SIZE = "40px 1fr 1fr 1fr 1fr 1fr";

export const SimpleTable: React.FC<Props> = ({ branchList, isLoading }) => {
  const Body = () => {
    return (
      <>
        <Loading isLoading={isLoading} data={branchList}>
          <TableBody
            sx={{ display: "block", flex: "1 0 0", overflow: "scroll" }}
          >
            {branchList?.map((row) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.id}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: TABLE_SIZE,
                  }}
                >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Loading>
      </>
    );
  };

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        borderRadius: 2,
        display: "flex",
        flex: 1,
      }}
    >
      <TableContainer sx={{ flex: 1, height: "100%", display: "flex" }}>
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <TableHead>
            <TableRow
              sx={{
                display: "grid",
                gridTemplateColumns: TABLE_SIZE,
              }}
            >
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <Body />
        </Table>
      </TableContainer>
    </Paper>
  );
};

const columns = [
  { id: "id", label: "id" },
  { id: "name", label: "Name" },
  { id: "code", label: "ISO\u00a0Code" },
  {
    id: "population",
    label: "Population",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

const useSortableData = (items: unknown[], config = null) => {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  } | null>(config);

  const sortedItems = useMemo(() => {
    const sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a: any, b: any) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: string) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort };
};

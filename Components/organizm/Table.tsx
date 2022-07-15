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
import Router from "next/router";

type Props = {
  branchList: any;
  isLoading?: boolean;
  columns: any;
  itemUrl?: string;
};

const TABLE_SIZE = "40px 1fr 1fr 1fr 1fr 1fr 1fr 1fr";

export const SimpleTable: React.FC<Props> = ({
  branchList,
  isLoading,
  columns,
  itemUrl,
}) => {
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
                  onClick={() =>
                    itemUrl && Router.push(`${itemUrl}?parkId=${row.id}`)
                  }
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
                        {column.format ? column.format(value) : value}
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

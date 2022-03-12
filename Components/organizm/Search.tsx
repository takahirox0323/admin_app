import { useFetchSite } from "@/hooks";
import { useCallback, useEffect, useState } from "react";
import type { NextPage } from "next";
import { ReactQuery } from "@/Components/Layout/ReactQuery";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { PageLayout } from "@/Components/organizm/PageLayout";
import Image from "next/image";
import { BoxScreenSize } from "@/Components/Layout/BoxScreenSize";
import { Header } from "@/Components/organizm/Header";
import { Spacer } from "@/Components/Layout/Spacer";
import { inputLabel } from "aws-amplify";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ParkRoundedIcon from "@mui/icons-material/ParkRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export const Search: React.FC = () => {
  const { branchList } = useFetchSite();
  const [isOpen, setClose] = useState(true);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleDialogModal = () => {
    setDialogOpen(!isDialogOpen);
  };

  const onChangeModal = () => {
    setClose(!isOpen);
  };

  const searchInput = [
    {
      id: 1,
      placeholder: "都道府県・公園から探す",
      hasFlex: true,
      icon: <LocationOnRoundedIcon sx={{ color: "#52bf90" }} />,
    },
    {
      id: 2,
      placeholder: "目的からさがす",
      hasFlex: false,
      icon: <ParkRoundedIcon sx={{ color: "#52bf90" }} />,
    },
    {
      id: 3,
      placeholder: "その他・詳細条件",
      hasFlex: false,
      icon: <AddRoundedIcon sx={{ color: "#52bf90" }} />,
    },
  ];

  return (
    <Box className="top-img" display="flex" height="450px" minWidth="1100px">
      <BoxScreenSize sx={{ position: "relative" }}>
        <Box
          position="absolute"
          width="calc(100% - 40px)"
          sx={{ top: "400px" }}
        >
          <Box
            sx={{
              width: "100%",
              padding: "24px",
              background: "#fff",
              boxShadow:
                "0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%)",
              borderRadius: "",
              border: "solid 1px #e1e1e1",
            }}
          >
            <Box component="form" display="flex" height="48px">
              {searchInput.map((searchItem, index) => {
                return (
                  <>
                    <Box
                      flex={searchItem.hasFlex ? 1 : 0}
                      display="flex"
                      alignItems="center"
                      sx={{ border: "1px solid #dedede", padding: "0 12px" }}
                    >
                      {searchItem.icon}
                      <Spacer size={8} />
                      <Box
                        flex={1}
                        component="input"
                        onChange={() => console}
                        // placeholder="都道府県・公園名から探す"
                        id="filled-basic"
                        placeholder={searchItem.placeholder}
                        sx={{
                          background: "unset",
                          paddingLeft: "20px",
                          height: "48px",
                          border: "unset",
                          "&:focus": {
                            outline: "none",
                          },
                        }}
                      />
                      <Spacer size={8} />
                      <CloseRoundedIcon sx={{ color: "#dedede" }} />
                    </Box>
                    {searchInput.length - 1 !== index && <Spacer size={8} />}
                  </>
                );
              })}

              <Spacer size={12} />
              <Button
                component="button"
                startIcon={<SearchRoundedIcon sx={{ color: "#fff" }} />}
                variant="contained"
                onClick={onChangeModal}
                sx={{
                  boxShadow: "unset",
                  background: "#52bf90",
                }}
              >
                さがす
              </Button>
            </Box>
          </Box>
        </Box>
      </BoxScreenSize>
    </Box>
  );
};

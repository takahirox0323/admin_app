import { createRef, useCallback, useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";
import { ReactQuery } from "@/Components/Layout/ReactQuery";
import { Box, Button, Typography } from "@mui/material";
import { BoxScreenSize } from "@/Components/Layout/BoxScreenSize";
import { Spacer } from "@/Components/Layout/Spacer";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ParkRoundedIcon from "@mui/icons-material/ParkRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Router from "next/router";
import Tooltip, { TooltipProps } from "@mui/material/Tooltip";
import { Fade, Grid, makeStyles } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useParkList } from "@/hooks";

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))`
  & .MuiTooltip-tooltip {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
    border: 1px solid #ddd;
  }
`;

type TabItemTypes = "area" | "purpose" | "other";

export type SearchRecord = Partial<
  Record<
    TabItemTypes,
    {
      value: string;
      isOpen: boolean;
    }
  >
>;

const DEFULT_VALUE = {
  area: { value: "", isOpen: false },
  purpose: { value: "", isOpen: false },
  other: { value: "", isOpen: false },
};

export const Search: React.FC = () => {
  const [SearchPram, setSearchPram] = useState<SearchRecord>(DEFULT_VALUE);

  const onChangeSearchPram = ({
    key,
    value,
  }: {
    key: string;
    value: string;
  }) => {
    setSearchPram({
      ...SearchPram,
      [key]: { isOpen: true, value: value },
    });
  };

  const onBlurSearchPram = ({
    key,
    isOpen,
  }: {
    key: string;
    isOpen: boolean;
  }) => {
    setSearchPram({
      ...SearchPram,
      [key]: { ...SearchPram[key], isOpen: isOpen },
    });
  };

  const deleteSearchPram = ({ key }: { key: string }) => {
    setSearchPram({
      ...SearchPram,
      [key]: { value: "", isOpen: false },
    });
  };

  console.log(SearchPram);

  const onChangeModal = () => {
    Router.push("/ParkList");
  };

  const searchInput = [
    {
      id: 1,
      key: "area",
      placeholder: "都道府県・地域から探す",
      hasFlex: true,
      onOpen: SearchPram.area.isOpen,
      value: SearchPram.area.value,
      icon: (
        <LocationOnRoundedIcon
          sx={{ color: "#52bf90" }}
          style={{ position: "absolute", left: 4, zIndex: 0 }}
        />
      ),
    },
    {
      id: 2,
      key: "purpose",
      placeholder: "目的からさがす",
      hasFlex: false,
      onOpen: SearchPram.purpose.isOpen,
      value: SearchPram.purpose.value,
      icon: (
        <ParkRoundedIcon
          sx={{ color: "#52bf90" }}
          style={{ position: "absolute", left: 4, zIndex: 0 }}
        />
      ),
    },
    {
      id: 3,
      key: "other",
      placeholder: "その他・詳細条件",
      hasFlex: false,
      onOpen: SearchPram.other.isOpen,
      value: SearchPram.other.value,
      icon: (
        <AddRoundedIcon
          sx={{ color: "#52bf90" }}
          style={{ position: "absolute", left: 4, zIndex: 0 }}
        />
      ),
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
            <Box
              component="form"
              display="flex"
              height="48px"
              noValidate
              autoComplete="off"
            >
              <Grid container spacing={1}>
                {searchInput.map((searchItem, index) => {
                  return (
                    <Grid item xs={3.5}>
                      <StyledTooltip
                        PopperProps={{}}
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 0 }}
                        placement="bottom-start"
                        open={searchItem.onOpen}
                        sx={{
                          padding: "-20px",
                          boxShadow:
                            "0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%) ",
                        }}
                        title={
                          <Box
                            sx={{
                              background: "#fff",
                              width: "600px",
                              padding: "16px",
                              zIndex: 10,
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#52bf90",
                              }}
                            >
                              <p
                                onClick={() => {
                                  console.log();
                                }}
                              >
                                こんにちは
                              </p>
                            </Typography>
                          </Box>
                        }
                      >
                        <Box
                          flex={searchItem.hasFlex ? 1 : 0}
                          display="flex"
                          alignItems="center"
                          sx={{
                            border: `1px solid ${
                              searchItem.onOpen ? "#52bf90" : "#dedede"
                            }`,
                            width: "100%",
                          }}
                          position="relative"
                        >
                          {searchItem.icon}
                          <TextInput
                            placeholder={searchItem.placeholder}
                            value={searchItem.value}
                            onChange={(e) =>
                              onChangeSearchPram({
                                key: searchItem.key,
                                value: e.target.value,
                              })
                            }
                            onBlur={() => {
                              onBlurSearchPram({
                                key: searchItem.key,
                                isOpen: false,
                              });
                            }}
                            style={{
                              padding: "0 32px",
                              height: 48,
                              width: "100%",
                              border: "unset",
                            }}
                          />
                          <CloseRoundedIcon
                            sx={{ color: "#dedede" }}
                            style={{
                              position: "absolute",
                              right: 4,
                              zIndex: 10,
                            }}
                            onClick={() => {
                              deleteSearchPram({ key: searchItem.key });
                            }}
                          />
                        </Box>
                      </StyledTooltip>
                      {/* </CustomToolTip> */}
                      {searchInput.length - 1 !== index && <Spacer size={8} />}
                    </Grid>
                  );
                })}
                <Grid item xs="auto">
                  <Button
                    component="button"
                    startIcon={<SearchRoundedIcon sx={{ color: "#fff" }} />}
                    variant="contained"
                    onClick={onChangeModal}
                    sx={{
                      height: "50px",
                      boxShadow: "unset",
                      background: "#52bf90",
                    }}
                  >
                    さがす
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </BoxScreenSize>
    </Box>
  );
};

const TextInput = styled.input`
  padding: 0px 32px;
  height: 48px;
  width: 100%;
  border: unset;
  background:unset;
  z-index:1;
  &:focus {
    outline-color: #52bf90;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0px 1000px #eff0ff inset;s
  }
  -webkit-appearance: none;
  appearance: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color:  #979797;;
  }
  :-ms-input-placeholder {
     color:  #979797;;
  }
`;

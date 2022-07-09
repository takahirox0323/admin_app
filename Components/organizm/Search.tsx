import { createRef, useCallback, useEffect, useState, useRef } from "react";
import type { NextPage } from "next";
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
import { viVN } from "@mui/x-data-grid";
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

export const Search: React.FC = () => {
  const { parkList } = useParkList();
  const [isLocationOpen, setLocationClose] = useState(false);
  const [isParkOpen, setParkClose] = useState(false);
  const [isOtherOpen, setOtherClose] = useState(false);
  const raaaef = useRef(null);

  const [isText, setText] = useState<string>("");

  const onChangeModal = () => {
    Router.push("/ParkList");
  };

  const searchInput = [
    {
      id: 1,
      placeholder: "都道府県・地域から探す",
      hasFlex: true,
      onOpen: isLocationOpen,
      onClick: () => setLocationClose(!isLocationOpen),
      icon: (
        <LocationOnRoundedIcon
          sx={{ color: "#52bf90" }}
          style={{ position: "absolute", left: 4, zIndex: 0 }}
        />
      ),
    },
    {
      id: 2,
      placeholder: "目的からさがす",
      hasFlex: false,
      onOpen: isParkOpen,
      onClick: () => setParkClose(!isParkOpen),
      icon: (
        <ParkRoundedIcon
          sx={{ color: "#52bf90" }}
          style={{ position: "absolute", left: 4, zIndex: 0 }}
        />
      ),
    },
    {
      id: 3,
      placeholder: "その他・詳細条件",
      hasFlex: false,
      onOpen: isOtherOpen,
      onClick: () => setOtherClose(!isOtherOpen),
      icon: (
        <AddRoundedIcon
          sx={{ color: "#52bf90" }}
          style={{ position: "absolute", left: 4, zIndex: 0 }}
        />
      ),
    },
  ];
  const [type, setType] = useState<string>("");
  const onChangeColor = (name: string) => {
    setType(name);
  };

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
              ref={raaaef}
              noValidate
              autoComplete="off"
            >
              <Grid container spacing={1}>
                {searchInput.map((searchItem, index) => {
                  return (
                    <Grid item xs={3.5}>
                      <StyledTooltip
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 0 }}
                        onOpen={() => onChangeColor("dfasdsaf")}
                        placement="bottom-start"
                        open={isText}
                        sx={{
                          padding: "-20px",
                          boxShadow:
                            "0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%) ",
                        }}
                        title={
                          <Box
                            sx={{
                              background: "#fff",
                              width: "250px",
                              padding: "16px",
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#52bf90",
                              }}
                            >
                              {isText}
                              <p
                                onClick={() => {
                                  console.log("fadfadsfa");
                                  setText("こんにちは");
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
                            border: "1px solid #dedede",
                            width: "100%",
                          }}
                          position="relative"
                        >
                          {searchItem.icon}
                          <TextInput
                            placeholder={searchItem.placeholder}
                            defaultValue={isText}
                            onChange={(e) => setText(e.target.value)}
                            onFocus={() => {
                              searchItem.onClick();
                            }}
                            onBlur={() => {
                              searchItem.onClick();
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
                            style={{ position: "absolute", right: 4 }}
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

export const SelectBox: React.FC<Props> = ({
  Icon,
  itemList,
  disableItemIds,
  initialValue,
  width,
  onClick,
  isDisabled,
  placeHolder,
  isEllipsis = true,
}) => {
  const [item, setItem] = useState<string>(initialValue);
  const [isOpen, setModalOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const selectItemsRef = useRef(
    itemList.map(() => createRef<HTMLDivElement>())
  );
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // セレクトボックス外をクリックした場合、非表示に変更する
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    scrollToContents(itemList.find((v) => v.name === initialValue)?.id ?? null);
    setItem(initialValue);
  }, [initialValue, isOpen]);

  const scrollToContents = (section: number, hasSmooth?: boolean) => {
    return selectItemsRef.current[section]?.current?.scrollIntoView({
      behavior: hasSmooth ? "smooth" : "auto",
    });
  };

  return (
    <>
      <TextInput
        placeholder={searchItem.placeholder}
        defaultValue={isText}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => {
          searchItem.onClick();
        }}
        onBlur={() => {
          searchItem.onClick();
        }}
        style={{
          padding: "0 32px",
          height: 48,
          width: "100%",
          border: "unset",
        }}
      />
      {isOpen && itemList.length !== 0 && (
        <SelectItems width={width}>{options}</SelectItems>
      )}
    </>
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
    border: 1px solid #535ca8;
    outline: none;
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

import { useFetchSite } from "@/hooks";
import { useCallback, useEffect, useState, useRef } from "react";
import type { NextPage } from "next";
import { ReactQuery } from "@/Components/Layout/ReactQuery";
import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Spacer } from "@/Components/Layout/Spacer";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Tag, Tags } from "../atoms/Tag";

export const MainSide: React.FC = () => {
  const [type, setType] = useState<string>("");
  const onChangeColor = (name: string) => {
    setType(name);
  };
  const AREA = [
    { name: "北海道", prefectures: [] },
    {
      name: "東北",
      prefectures: [{ name: "青森" }, { name: "岩手" }, { name: "青森" }],
    },
    { name: "関東" },
    { name: "中部・北部" },
    { name: "関西" },
    { name: "中国・四国" },
    { name: "九州・沖縄" },
  ];
  return (
    <Box width="275px">
      {/* 都道府県から探す */}
      <Box>
        <Typography fontSize="16px" variant="h1" fontWeight="600">
          都道府県からさがす
        </Typography>
        <Spacer size={16} vertical />
        <Tags array={AREA} />
      </Box>

      <Spacer vertical size={36} />

      {/* 都道府県から探す */}
      <Typography fontSize="16px" variant="h1" fontWeight="600">
        人気のタグからさがす
      </Typography>

      <Spacer size={16} vertical />
      <Box display="flex" flexDirection="column">
        {AREA.map((area) => {
          return (
            <Tooltip
              onOpen={() => onChangeColor(area.name)}
              onClose={() => setType("")}
              placement="right-start"
              sx={{
                background: "#fff",
                border: "1px solid #dedede",
                padding: "-20px",
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
                      color: type === area.name ? "#52bf90" : "unset",
                    }}
                  >
                    {area.name}
                  </Typography>
                  <Box
                    position="relative"
                    flex={1}
                    display="flex"
                    justifyContent="space-between"
                    padding="16px 0"
                    sx={{
                      borderBottom: `1px solid #dedede
                `,
                    }}
                  >
                    <Typography color={"#000"}>{area.name}</Typography>
                    <ArrowForwardIosRoundedIcon
                      fontSize="small"
                      sx={{
                        color: "#a9a7a7",
                      }}
                    />
                  </Box>
                  <Box height="300px"></Box>
                </Box>
              }
            >
              <Box
                position="relative"
                flex={1}
                display="flex"
                justifyContent="space-between"
                padding="16px 0"
                sx={{
                  borderBottom: `1px solid ${
                    type === area.name ? "#52bf90" : "#dedede"
                  }`,
                }}
              >
                <Typography color={type === area.name ? "#52bf90" : "unset"}>
                  {area.name}
                </Typography>
                <ArrowForwardIosRoundedIcon
                  fontSize="small"
                  sx={{
                    color: type === area.name ? "#52bf90" : "#a9a7a7",
                  }}
                />
              </Box>
            </Tooltip>
          );
        })}
      </Box>
    </Box>
  );
};

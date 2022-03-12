import {
  Box as BoxComponent,
  BoxTypeMap,
  CircularProgress,
} from "@mui/material";

export const BoxScreenSize = (props) => {
  return (
    <BoxComponent
      {...props}
      display="flex"
      flex={1}
      maxWidth="1100px"
      minWidth="1100px"
      width="100%"
      position="relative"
      sx={{ margin: "0 auto" }}
      padding={props.padding ?? "0 20px"}
    >
      {props.children}
    </BoxComponent>
  );
};

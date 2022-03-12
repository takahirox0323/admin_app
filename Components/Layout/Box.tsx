import {
  Box as BoxComponent,
  BoxTypeMap,
  CircularProgress,
} from "@mui/material";

export const Box = (props) => {
  return (
    <BoxComponent display="flex" flex={1} {...props}>
      {props.children}
    </BoxComponent>
  );
};

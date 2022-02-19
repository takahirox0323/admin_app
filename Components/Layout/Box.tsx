import { Box as BoxComponent, CircularProgress } from "@mui/material";

type Props = {
  flex?: boolean; //display:flex
  inlineBlock?: boolean; //display:flex
  alignCenter?: boolean;
  justifyStart?: boolean;
  justifyCenter?: boolean;
  justifyBetween?: boolean;
  flexDirectionColumn?: boolean;
};

export const Box: React.FC<Props> = ({
  flex,
  inlineBlock,
  children,
  alignCenter,
  justifyStart,
  justifyCenter,
  justifyBetween,
  flexDirectionColumn,
}) => {
  return (
    <BoxComponent
      display={flex ? "flex" : inlineBlock ? "inline-block" : "block"}
      alignItems={alignCenter ? "center" : "unset"}
      justifyContent={
        justifyBetween
          ? "space-between"
          : justifyStart
          ? "flex-start"
          : justifyCenter
          ? "center"
          : "flex-end"
      }
      flexDirection={flexDirectionColumn ? "column" : "row"}
      flex={1}
    >
      {children}
    </BoxComponent>
  );
};

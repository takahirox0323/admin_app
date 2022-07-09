import Tooltip, { TooltipProps } from "@mui/material/Tooltip";
import { Box, Button, Container, Fade, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

type Props = {
  name?: string;
  children: React.ReactElement<any, any>;
  onChange?: any;
  onClose?: any;
  content?: React.ReactNode;
  placement?: "bottom-start";
};

const StyledTooltip = styled(
  ({ className, ...props }: TooltipProps): JSX.Element => (
    <Tooltip {...props} classes={{ popper: className }} />
  )
)`
  & .MuiTooltip-tooltip {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
    border: 1px solid #ddd;
    max-width: unset;
  }
`;

export const CustomToolTip: React.FC<Props> = ({
  name,
  children,
  onChange,
  content,
  onClose,
  placement,
}): JSX.Element => {
  return (
    <StyledTooltip
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 0 }}
      onOpen={onChange}
      onClose={onClose ?? console}
      placement={placement ? placement : "right-start"}
      sx={{
        padding: "-20px",
        boxShadow: "0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%) ",
      }}
      title={content}
    >
      {children}
    </StyledTooltip>
  );
};

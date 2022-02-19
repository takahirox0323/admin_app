import { CircularProgress } from "@mui/material";
import { Box } from "../Layout/Box";

type Props = {
  isLoading: boolean;
  data: any;
};

export const Loading: React.FC<Props> = ({ isLoading, children, data }) => {
  if (isLoading) {
    return (
      <Box flex alignCenter justifyCenter>
        <CircularProgress size={80} sx={{ top: 0 }} />
      </Box>
    );
  } else if (!data) {
    return (
      <Box flex alignCenter justifyCenter>
        <span>
          ネットワークエラーが発生しました。
          <br />
          しばらくしたのち、再度お試しください。
        </span>
      </Box>
    );
  } else if (
    ((typeof data === "string" || "number") && !data) ||
    data.length === 0
  ) {
    return (
      <Box flex alignCenter justifyCenter>
        <span>データがありません</span>
      </Box>
    );
  } else {
    return <>{children} </>;
  }
};

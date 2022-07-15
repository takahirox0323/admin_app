import { Box } from "@mui/material";

type Props = {
  name: string;
};
type TagsProps = {
  array: any;
};

export const Tag: React.FC<Props> = ({ name }) => {
  return (
    <Box
      sx={{
        padding: "6px",
        border: "1px solid #dedede",
        borderRadius: 2,
        mr: 1,
        mb: 1,
        fontSize: 14,
        ":hover": { opacity: 0.8 },
      }}
    >
      {name}
    </Box>
  );
};

export const Tags: React.FC<TagsProps> = ({ array }) => {
  return (
    <Box display="flex" alignItems="center" flexWrap="wrap">
      {array.map((tag, index) => {
        return <Tag key={index} name={tag.name} />;
      })}
    </Box>
  );
};

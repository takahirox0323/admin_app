import React from "react";

type Props = {
  size: number;
  vertical?: boolean;
  style?: React.CSSProperties;
};

export const Spacer: React.FC<Props> = ({ size, vertical, style }) => {
  const width = vertical ? "100%" : size;
  const height = vertical ? size : 1;
  return (
    <span
      style={{
        display: "block",
        width: width,
        minWidth: width,
        height: height,
        minHeight: height,
        ...style,
      }}
    />
  );
};

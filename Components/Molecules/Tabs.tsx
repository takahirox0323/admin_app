import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

type Props = {
  Item1: React.ReactNode;
  Item2?: React.ReactNode;
  Item3?: React.ReactNode;
  Item1Name?: string;
  Item2Name?: string;
  Item3Name?: string;
};

export const Tabs: React.FC<Props> = ({
  Item1,
  Item2,
  Item3,
  Item1Name,
  Item2Name,
  Item3Name,
}) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label={Item1Name} value="1" />
            <Tab label={Item2Name} value="2" />
            <Tab label={Item3Name} value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">{Item1}</TabPanel>
        <TabPanel value="2">{Item2}</TabPanel>
        <TabPanel value="3">{Item3}</TabPanel>
      </TabContext>
    </Box>
  );
};

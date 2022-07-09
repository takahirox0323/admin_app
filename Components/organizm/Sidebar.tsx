import { Box, Typography } from "@mui/material";
import Router from "next/router";
import { Spacer } from "@/Components/Layout/Spacer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import BusinessIcon from "@mui/icons-material/Business";
import StoreTwoToneIcon from "@mui/icons-material/StoreTwoTone";
import AppsIcon from "@mui/icons-material/Apps";
type Props = {
  isOpen: boolean;
};

export const Sidebar: React.FC<Props> = ({ isOpen }) => {
  const menuItems = [
    {
      id: 1,
      name: "公園一覧",
      path: "/admin",
      Icon: <DashboardIcon sx={{ color: "#ededed" }} />,
    },
    {
      id: 1,
      name: "公園タイプ一覧",
      path: "/admin/ParkTypeList",
      Icon: <DashboardIcon sx={{ color: "#ededed" }} />,
    },
    {
      id: 2,
      name: "ユーザー一覧",
      path: "/admin/Users",
      Icon: <GroupIcon sx={{ color: "#ededed" }} />,
    },
    {
      id: 3,
      name: "会社一覧",
      path: "/admin/Companies",
      Icon: <BusinessIcon sx={{ color: "#ededed" }} />,
    },
    {
      id: 4,
      name: "支社一覧",
      path: "/admin/Branches",
      Icon: <StoreTwoToneIcon sx={{ color: "#ededed" }} />,
    },
  ];

  return (
    <Box
      sx={
        isOpen
          ? {
              marginLeft: "0px",
              transition: "0.5s",
              left: -200,
              width: 200,
              minWidth: 200,
              background: "#5787D0",
            }
          : {
              marginLeft: "-200px",
              transition: "0.5s",
              width: 200,
              minWidth: 200,
              left: 0,
              background: "#5787D0",
            }
      }
      role="presentation"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        height="100%"
      >
        <Box>
          <List>
            {menuItems.map((menu, index) => (
              <ListItem
                button
                key={menu.id}
                onClick={() =>
                  Router.push({
                    pathname: menu.path,
                  })
                }
              >
                <ListItemIcon>{menu.Icon}</ListItemIcon>
                <Typography sx={{ fontSize: 12 }} color="#ededed">
                  {menu.name}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
        <ListItem button>
          <SettingsIcon sx={{ color: "#fff" }} />
          <Spacer size={12} />
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: "bold",
              padding: "12px 0",
            }}
            color="#ededed"
          >
            設定
          </Typography>
        </ListItem>
      </Box>
    </Box>
  );
};

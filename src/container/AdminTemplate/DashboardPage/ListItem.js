import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import TheatersIcon from "@mui/icons-material/Theaters";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
const listItems = [
  {
    title: "Users",
    icon: <PeopleIcon />,
  },
  {
    title: "Movies",
    icon: <TheatersIcon />,
  },
  {
    title: "Tickets",
    icon: <ConfirmationNumberIcon />,
  },
];
const ListItems = ({ active, onActive }) => {
  return (
    <React.Fragment>
      {listItems.map((item, i) => (
        <ListItemButton
          key={i}
          onClick={() => onActive(i)}
          sx={[
            active === i && {
              backgroundColor: "#1976d2",
            },
          ]}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      ))}
    </React.Fragment>
  );
};
export default ListItems;

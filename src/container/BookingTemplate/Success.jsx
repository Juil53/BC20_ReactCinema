import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import { useHistory } from "react-router-dom";
const Success = () => {
  const history = useHistory();
  return (
    <Box textAlign={"center"} width={"100%"} py={4}>
      <img src="./img/complete.svg" alt="complete" style={{ maxWidth: 200 }} />
      <Typography variant="subtitle1" gutterBottom sx={{ color: "#fff" }}>
        Booking Successfully!
      </Typography>
      <Box>
        <Button
          variant="outlined"
          sx={{ marginRight: 2 }}
          startIcon={<SettingsBackupRestoreIcon />}
          onClick={() => history.push("/")}
        >
          Back to home
        </Button>
        <Button variant="contained" startIcon={<BookOnlineIcon />}>
          View Tickets
        </Button>
      </Box>
    </Box>
  );
};

export default Success;

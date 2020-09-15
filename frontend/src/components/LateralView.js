import React from "react";
import { Modal, Grid, Box, Button } from "@material-ui/core";
import "../styles/lateral_view.css";

function LateralView({
  children,
  onOpen,
  onClose = () => { },
}) {
  return (
    <Modal open={onOpen}>
      <Grid container justify="flex-end" alignItems="flex-start" spacing={0}>
        <Grid item md={8} lg={6}>
          <Box className="lateral-view-box">
            <Button onClick={() => onClose()}>Close</Button>
            {children}
          </Box>
        </Grid>
      </Grid>
    </Modal>
  );
}

export default LateralView;

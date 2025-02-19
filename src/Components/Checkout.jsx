import * as React from "react";
import Popup from "./Popup";

export default function AlertDialog() {


  return (
    <React.Fragment>
      <Popup open={handleOpen} handleClose={handleClose} />
    </React.Fragment>
  );
}

// import React from "react";

// const Modal = () => {
//   return <div>Modal</div>;
// };

// export default Modal;

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Modal() {
  return (
    <Box
      style={{ display: "flex", justifyContent: "center" }}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="Text">
        <div>
          <TextField id="outlined-error" label="id" />
        </div>
        <div>
          <TextField id="outlined-error" label="First_Name" />
          {/* <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        /> */}
          {/* </div>
      <div>
        <TextField
          error
          id="filled-error"
          label="Error"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          error
          id="filled-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="filled"
        />
      </div>
      <div>
        <TextField
          error
          id="standard-error"
          label="Error"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="standard"
        /> */}
        </div>
        <div>
          <TextField id="outlined-error" label="Last_Name" />
        </div>
      </div>
    </Box>
  );
}

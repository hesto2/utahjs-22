import React, { useEffect } from "react";
import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      background: "purple",
    },
  })
);

function App() {
  const classes = useStyles();
  return <div>This is a test app</div>;
}

export default App;

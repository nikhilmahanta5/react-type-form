import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Confirm from "./confirm.js";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function TypeForm({ children, onSubmit }) {
  const classes = useStyles();
  children = [...children, <Confirm />];
  const [fields, setFields] = useState(0);
  const nextField = () => {
    if (fields < children.length) setFields((prev) => prev + 1);
  };
  const prevField = () => {
    if (fields > 0) setFields((prev) => prev - 1);
  };

  return (
    <React.Fragment>
      <form className={classes.box} onSubmit={onSubmit}>
        {children[fields]}

        <ButtonGroup
          disableElevation
          size="small"
          variant="contained"
          color="primary"
        >
          {fields < children.length - 1 && fields > 0 && (
            <Button onClick={prevField}>back</Button>
          )}
          {fields < children.length - 2 && (
            <Button onClick={nextField}>Next</Button>
          )}
          {fields === children.length - 2 && (
            <Button onClick={nextField}>Submit</Button>
          )}
        </ButtonGroup>
      </form>
    </React.Fragment>
  );
}

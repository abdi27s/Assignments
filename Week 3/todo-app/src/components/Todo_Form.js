import React, { useState } from "react";
import { FormControl, Container, TextField, Button } from "@material-ui/core";

const Todo_Form = ({ addTodo }) => {
  const [values, setValues] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo(values);
    setValues("");
  };
  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth={true}>
          <TextField
            label="Enter Your To-Do Here"
            required={true}
            value={values}
            onChange={(evt) => setValues(evt.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: 5 }}
          >
            ADD TO-DO
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default Todo_Form;

import React from "react";
import {
  Card,
  CardContent,
  Container,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const Todo_main = ({ title, id, deleteTodo }) => {
  const delTodo = () => deleteTodo(id);

  return (
    <div>
      <Container>
        <Card
          variant="outlined"
          style={{ marginTop: 35, background: "lightgray" }}
        >
          <CardContent>
            <Typography variant="h5" component="h2">
              {id} <br />
              {title}
              <IconButton style={{ float: "right" }} onClick={delTodo}>
                <Delete style={{ color: "red" }}></Delete>
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Todo_main;

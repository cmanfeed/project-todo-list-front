import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Api } from "../../api/api";
import "./TaskAdd.scss";

const TaskAdd = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    console.log(e);
    const description = e.target.description.value;
    const priority = e.target.priority.value;
    const status = e.target.status.value;
    const dateFinal = e.target.dateFinal.value;

    const Task = {
      title: title,
      description: description,
      priority: priority,
      status: status,
      dateFinal: dateFinal,
    };

    console.log(dateFinal)

    const response = await Api.fetchPost(Task);
    const data = await response.json();
    props.history.push("/");
  };

  return (
    <Container fixed>
      <div className="main-text">
        <Typography variant="h4" color="textPrimary">
          Adicionar Nova Tarefa
        </Typography>
      </div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="textfield-margin">
          <TextField required label="Nome" variant="outlined" name="title" />
        </div>
        <div className="textfield-margin">
          <TextField
            required
            multiline
            label="Descrição"
            variant="outlined"
            rows={5}
            style={{ width: "48em" }}
            name="description"
          />
        </div>
        <div className="textfield-margin">
          <TextField
            required
            label="Prioridade"
            variant="outlined"
            name="priority"
          />
        </div>
        <div className="textfield-margin">
          <TextField required label="Status" variant="outlined" name="status" />
        </div>
        <div className="textfield-margin">
          <TextField
            required
            type="date"
            defaultValue="2021-09-15"
            label="Data Finalização"
            variant="outlined"
            name="dateFinal"
          />
        </div>
        <div className="button-area-add">
          <Button variant="contained" type="submit">
            Salvar
          </Button>
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <Button variant="contained" color="secondary">
              Voltar
            </Button>
          </Link>
        </div>
      </form>
    </Container>
  );
};

export default TaskAdd;

import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Api } from "../../api/api";
import "./TaskEdit.scss";

const TaskEdit = (props) => {
  const id = props.match.params.id;
  const [fields, setFields] = useState({});

  useEffect(() => {
    getTaskById();
  }, []);

  const getTaskById = async () => {
    const response = await Api.fetchGetById(id);
    const data = await response.json();
    setFields(data);
  };

  const handleFieldsChange = (e) => {
    const auxFields = { ...fields };
    auxFields[e.target.name] = e.target.value;
    setFields(auxFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...fields };
    const result = await Api.fetchPut(data, id);
    const response = await result.json();
    console.log(response);
    props.history.push("/");
  };

  return (
    <Container fixed>
      <div className="main-text">
        <Typography variant="h4" color="textPrimary">
          Editar Tarefa
        </Typography>
      </div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="textfield-margin">
          <TextField
            value={fields.title || ""}
            label="Título"
            name="title"
            onChange={handleFieldsChange}
            variant="outlined"
          />
        </div>
        <div className="textfield-margin">
          <TextField
            label="Descrição"
            value={fields.description || ""}
            onChange={handleFieldsChange}
            variant="outlined"
            multiline
            rows={5}
            style={{ width: "48em" }}
            name="description"
          />
        </div>
        <div className="textfield-margin">
          <TextField
            label="Prioridade"
            value={fields.priority || ""}
            onChange={handleFieldsChange}
            variant="outlined"
            name="priority"
          />
        </div>
        <div className="textfield-margin">
          <TextField
            label="Status"
            value={fields.status || ""}
            onChange={handleFieldsChange}
            variant="outlined"
            name="status"
          />
        </div>
        <div className="textfield-margin">
          <TextField
            label="Data Final"
            value={fields.dateFinal || ""}
            onChange={handleFieldsChange}
            variant="outlined"
            style={{ width: "15em" }}
            name="dateFinal"
          />
        </div>
        <div className="button-area-edit">
          <Button variant="contained" type="submit">
            Salvar
          </Button>
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <Button variant="contained" type="submit" color="primary">
              Voltar
            </Button>
          </Link>
        </div>
      </form>
    </Container>
  );
};

export default TaskEdit;

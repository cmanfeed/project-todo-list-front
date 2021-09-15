import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Api } from "../../api/api";
import "./TaskView.scss";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const TaskView = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [task, setTask] = useState({});

  useEffect(() => {
    getTaskById();
  }, []);

  const id = props.match.params.id;

  const getTaskById = async () => {
    const response = await Api.fetchGetById(id);
    const data = await response.json();
    setTask(data);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const resposta = await Api.fetchDelete(id);
    const result = await resposta;
    console.log(result);
    props.history.push("/");
  };

  return (
    <Container fixed>
      <div className="main-text">
        <Typography variant="h4" color="textPrimary">
          Detalhes da Tarefa
        </Typography>
      </div>
      <form autoComplete="off">
        <div className="textfield-margin">
          <TextField
            disabled
            label="Título"
            value={task.title || ""}
            variant="outlined"
          />
        </div>
        <div className="textfield-margin">
          <TextField
            disabled
            label="Descrição"
            value={task.description || ""}
            variant="outlined"
            multiline
            rows={5}
            style={{ width: "48em" }}
          />
        </div>
        <div className="textfield-margin">
          <TextField
            disabled
            label="Prioridade"
            value={task.priority || ""}
            variant="outlined"
          />
        </div>
        <div className="textfield-margin">
          <TextField
            disabled
            label="Status"
            value={task.status || ""}
            variant="outlined"
          />
        </div>
        <div className="textfield-margin">
          <TextField
            disabled
            label="Data Final"
            value={task.dateFinal || ""}
            variant="outlined"
            style={{ width: "15em" }}
          />
        </div>
        <div className="button-area-view">
          <Link to={`/edit/${task._id}`} style={{ textDecoration: "none" }}>
            <Button variant="contained">Editar</Button>
          </Link>
          <Button variant="contained" color="secondary" onClick={handleOpen}>
            Excluir
          </Button>
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Voltar
            </Button>
          </Link>
        </div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Tem Certeza?</h2>
              <p id="transition-modal-description">
                Essa ação excluirá a Tarefa do Banco de Dados.
              </p>
              <Button
                variant="contained"
                color="primary"
                onClick={handleClose}
                style={{ marginRight: "10px" }}
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleDelete}
              >
                Excluir
              </Button>
            </div>
          </Fade>
        </Modal>
      </form>
    </Container>
  );
};

export default TaskView;
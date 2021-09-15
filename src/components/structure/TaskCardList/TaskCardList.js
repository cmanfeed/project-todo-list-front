import React, { useEffect, useState } from "react";
import "./TaskCardList.scss";
import Container from "@material-ui/core/Container";
import TaskCard from "../TaskCard/TaskCard";
import { Api } from "../../../api/api";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const response = await Api.fetchGet();
    const data = await response.json();
    setTasks(data);
  };

  return (
    <Container fixed>
      <div className="cards-area">
        {tasks.map((task, index) => (
          <div key={task._id} className="card-margin">
            <TaskCard task={task} key={task._id} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TaskList;

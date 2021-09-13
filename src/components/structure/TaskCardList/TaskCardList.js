import React from "react";
import "./TaskCardList.scss";
import TaskCard from "../TaskCard/TaskCard";

const TaskList = () => {
  return (
    <div className="cards-area">
      <div className="card-margin">
        <TaskCard />
      </div>
      <div className="card-margin">
        <TaskCard />
      </div>
      <div className="card-margin">
        <TaskCard />
      </div>
      <div className="card-margin">
        <TaskCard />
      </div>
      <div className="card-margin">
        <TaskCard />
      </div>
    </div>
  );
};

export default TaskList;

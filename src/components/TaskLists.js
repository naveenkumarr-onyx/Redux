import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import MyVerticallyCenteredModal from "./UpdateTask";
import { useSelector, useDispatch } from "react-redux";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { setSelectedTask, removeTaskFromList } from "../slices/tasksSlice";
import { getTasksFromServer } from "../slices/tasksSlice";
const TaskLists = () => {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const updateTask = (task) => {
    setModalShow(true);
    dispatch(setSelectedTask(task));
  };
  useEffect(() => {
    dispatch(getTasksFromServer());
  });
  const deleteTask = (task) => {
    if (!window.confirm("Are you sure to delete these task?")) return;

    dispatch(removeTaskFromList(task));
    console.log("deleted");
  };
  const { tasksList } = useSelector((state) => state.tasks);
  return (
    <>
      <Table
        striped
        bordered
        hover
        style={{
          marginTop: "30px",
        }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasksList &&
            tasksList.map((task, index) => {
              return (
                <tr key={task.id}>
                  <td>{index + 1}</td>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <Button variant="primary" onClick={() => updateTask(task)}>
                      <Icon.PencilSquare />
                      {/* <FaRegEdit style={{}} /> */}
                    </Button>
                    <Button variant="primary" onClick={() => deleteTask(task)}>
                      <Icon.Trash />
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TaskLists;

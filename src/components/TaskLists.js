import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import MyVerticallyCenteredModal from "./UpdateTask";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const TaskLists = () => {
  const [modalShow, setModalShow] = useState(false);
  const updateTask = () => {
    setModalShow(true);
  };
  const deleteTask = () => {
    console.log("deleted");
  };
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
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
              <Button variant="primary" onClick={() => updateTask()}>
                <Icon.PencilSquare />
                {/* <FaRegEdit style={{}} /> */}
              </Button>
              <Button variant="primary" onClick={() => deleteTask()}>
                <Icon.Trash />
              </Button>
            </td>
          </tr>
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

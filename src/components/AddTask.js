import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import {addTasksToServer } from "../slices/tasksSlice";
const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const submitTask = (e) => {
    e.preventDefault();
    console.log({
      title,
      description,
    });
    if (!title) {
      alert("please enter ur task ");
      return;
    }
    dispatch(
      addTasksToServer({
        title,
        description,
      })
    );
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Task Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Task here...."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Task Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description here...."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <div>
          <Button
            variant="primary"
            type="submit"
            className=" center"
            onClick={(e) => submitTask(e)}
          >
            Add Task
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTask;

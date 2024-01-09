import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { updateTasksToServer } from "../slices/tasksSlice";
import { useDispatch, useSelector } from "react-redux";

const MyVerticallyCenteredModal = (props) => {
  const { selectedTask } = useSelector((state) => state.tasks);
  const [title, updateTitle] = useState("");
  const [description, updateDescription] = useState("");
  const [id, setId] = useState(0);
  const dispatch = useDispatch();
  const updateTask = () => {
    props.onHide();
    dispatch(
      updateTasksToServer({
        id,
        title,
        description,
      })
    );
  };
  useEffect(() => {
    if (Object.keys(selectedTask).length !== 0) {
      updateTitle(selectedTask.title);
      updateDescription(selectedTask.description);
      setId(selectedTask.id);
    }
  }, [selectedTask]);
  return (
    <div>
      <Modal
        size="lg"
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Task Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                placeholder="Enter Task Title"
                onChange={(e) => updateTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                type="text"
                vlaue={description}
                placeholder="Enter Task Description"
                onChange={(e) => updateDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <div className="text-end">
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => updateTask(e)}
            >
              Update Task
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyVerticallyCenteredModal;

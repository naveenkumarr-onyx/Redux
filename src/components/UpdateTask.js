import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const MyVerticallyCenteredModal = (props) => {
  const [title, updateTitle] = useState("");
  const [description, updateDescription] = useState("");
  const updateTask = () => {
    props.onHide();
  };
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
                placeholder="Enter Task Title"
                onChange={(e) => updateTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                type="text"
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

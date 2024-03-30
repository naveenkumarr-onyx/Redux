import AddTask from "./components/AddTask";
import Navbar from "./components/Navbar";
// import Redux from "./components/Redux";
import { Row, Col } from "react-bootstrap";
import Container from "./../node_modules/react-bootstrap/esm/Container";
import TaskLists from "./components/TaskLists";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

function App() {
  const { isLoading } = useSelector((state) => state.tasks);
  console.log(isLoading);
  return (
    <div className="App">
      <Container>
        <Navbar />
        <Row className=" justify-content-md-center">
          <Col lg="6">
            <AddTask />
            <TaskLists />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

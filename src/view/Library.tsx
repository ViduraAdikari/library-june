import {FC} from "react";
import Container from "react-bootstrap/Container";
import Welcome from "../components/Welcome";

const Library: FC = () => {
  return (
    <Container fluid>
      <Welcome/>
    </Container>
  )
}

export default Library;

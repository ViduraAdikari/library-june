import {FC} from "react";
import Container from "react-bootstrap/Container";
import Welcome from "../components/Welcome";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Authors from "../components/authors/Authors";

const Library: FC = () => {
  return (
    <Container fluid>
      <Welcome/>

      <Row>
        <Col xs={6}>Books</Col>
        <Col xs={6}>
          <Authors/>
        </Col>
      </Row>
    </Container>
  )
}

export default Library;

import {FC} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AuthorTitle from "./AuthorTitle";
import EmptyLabel from "./EmptyLabel";
import AddAuthor from "./AddAuthor";
import AuthorsList from "./AuthorsList";

const Authors: FC = () => {
  return (
    <Row className="authors pt-2">
      <Col xs={12} className="pe-5">
        <AuthorTitle/>
        {/*<EmptyLabel/>*/}
        <AuthorsList/>
        <AddAuthor/>
      </Col>
    </Row>
  )
}

export default Authors;

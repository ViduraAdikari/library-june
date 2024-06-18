import React, {FC} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const AuthorTitle: FC = () => {
  return (
    <Row>
      <Col xs={12}>
        <h2 className="pb-2">Authors</h2>
      </Col>
    </Row>
  )
}

export default AuthorTitle;

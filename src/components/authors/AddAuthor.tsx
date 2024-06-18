import React, {FC} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AddAuthor: FC = () => {
  return (
    <Row>
      <Col xs={12} className="add-author d-flex align-items-center">
        <i className="feather-plus"/>
        <label className="ms-1">Add Author</label>
      </Col>
    </Row>
  )
}

export default AddAuthor;

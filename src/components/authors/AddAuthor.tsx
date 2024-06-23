import React, {FC, PropsWithChildren} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type AddAuthorProps = {
  onAddAuthorClick: () => void
}

const AddAuthor: FC<AddAuthorProps> = (props: PropsWithChildren<AddAuthorProps>) => {
  return (
    <Row>
      <Col xs={12} className="add-author d-flex align-items-center mb-4" onClick={props.onAddAuthorClick}>
        <i className="feather-plus"/>
        <label className="ms-1">Add Author</label>
      </Col>
    </Row>
  )
}

export default AddAuthor;

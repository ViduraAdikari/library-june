import React, {FC} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const EmptyLabel: FC = () => {
  return (
    <Row>
      <Col xs={12}>
        <label className="empty-label my-3">No authors listed here.</label>
      </Col>
    </Row>
  )
}

export default EmptyLabel;

import {FC, PropsWithChildren} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type AuthorProps = {
  num: number
  name: string
}

const Author: FC<AuthorProps> = (props: PropsWithChildren<AuthorProps>) => {

  const {num, name} = props;

  return (
    <Row className="my-1 py-2">
      <Col xs={9}>
        <label>{num}. {name}</label>
      </Col>
      <Col xs={3} className="d-flex justify-content-end align-items-center">
        <i className="feather-edit text-warning edit me-3"/>
        <i className="feather-trash-2 remove me-3"/>
      </Col>
    </Row>
  )
};

export default Author;

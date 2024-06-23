import React, {FC, FormEvent, PropsWithChildren, useState} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {IAuthor} from "../../types/type";

type AuthorFormProps = {
  onCloseClick: () => void
  onAuthorCreated: (newAuthor: IAuthor) => void
}

const AuthorForm: FC<AuthorFormProps> = (props: PropsWithChildren<AuthorFormProps>) => {

  const {onCloseClick, onAuthorCreated} = props;

  const [authorName, setAuthorName] = useState<string | null>(null);

  const handleOnNameChange = (value: string) => {
    setAuthorName(value);
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!authorName) {
      alert("Author name cannot be null");
      return;
    }

    const author: IAuthor = {name: authorName};
    onAuthorCreated(author);
  }

  return (
    <Row className="mt-5 author-form">
      <Col xs={8}>
        <Row>
          <Col xs={12} className="d-flex align-items-center justify-content-between">
            <h3>Create Author</h3>
            <i className="feather-x-circle" onClick={onCloseClick}/>
          </Col>

          <Col xs={{span: 11, offset: 1}} className="mt-3 d-flex flex-column">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="authorName">
                <Form.Label>Name of Author</Form.Label>
                <Form.Control type="text"
                              value={authorName ? authorName : ""}
                              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                handleOnNameChange(event.target.value)}/>
              </Form.Group>

              <div className="text-end">
                <Button variant="primary" type="submit" className="mt-2">
                  Create
                </Button>
              </div>

            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AuthorForm;

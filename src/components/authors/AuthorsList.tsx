import React, {FC} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {IAuthor} from "../../types/type";

const authorsList: IAuthor[] = [
  {name: "Author 1 name"},
  {name: "Author 2 name"},
  {name: "Author 3 name"},
  {name: "Author 4 name"},
]

const AuthorsList: FC = () => {

  const renderAuthors = () => {
    return (
      <ul>
        {
          authorsList.map((author: IAuthor, index: number) => {
            return <li key={index}>{author.name}</li>;
          })
        }
      </ul>
    )
  }

  return (
    <Row>
      <Col xs={12} className="my-4 authors-list">
        {renderAuthors()}
      </Col>
    </Row>
  )
}

export default AuthorsList;

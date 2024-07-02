import React, {FC, PropsWithChildren} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {IAuthor} from "../../types/type";
import Author from "./Author";

type AuthorListProps = {
  authors: IAuthor[]
  onDeleteClick: (index: number) => void
  onUpdateClick: (index: number) => void
}

const AuthorsList: FC<AuthorListProps> = (props: PropsWithChildren<AuthorListProps>) => {

  const {authors, onDeleteClick, onUpdateClick} = props;

  const renderAuthors = () => {
    return (
      <ul>
        {
          authors.map((author: IAuthor, index: number) => {
            return (
              <li className="author"
                  key={index}>
                <Author num={index + 1} name={author.name} onDeleteClick={onDeleteClick}
                        onUpdateClick={onUpdateClick}/>
              </li>
            );
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

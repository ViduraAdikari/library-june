import {FC, useEffect, useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AuthorTitle from "./AuthorTitle";
import EmptyLabel from "./EmptyLabel";
import AddAuthor from "./AddAuthor";
import AuthorsList from "./AuthorsList";
import AuthorForm from "./AuthorForm";
import {IAuthor} from "../../types/type";

const Authors: FC = () => {

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [authors, setAuthors] = useState<IAuthor[] | null>(null);
  const [authorToUpdateIndex, setAuthorToUpdateIndex] = useState<number | null>(null);
  const [authorToUpdate, setAuthorToUpdate] = useState<IAuthor | null>(null);

  useEffect(() => {
    if (!authors || authorToUpdateIndex === null) {
      return;
    }

    setAuthorToUpdate(authors[authorToUpdateIndex]);
  }, [authorToUpdateIndex]);

  useEffect(() => {
    if (authorToUpdate === null) {
      return;
    }

    setIsFormVisible(true);
  }, [authorToUpdate]);

  const handleOnAddAuthorClick = () => {
    setAuthorToUpdateIndex(null);
    setAuthorToUpdate(null);
    setIsFormVisible(true);
  }

  const handleOnCloseFormClick = () => {
    setIsFormVisible(false);
  }

  const handleOnAuthorCreated = (newAuthor: IAuthor) => {
    const allAuthors: IAuthor[] = authors ? authors.slice() : [];
    allAuthors.push(newAuthor);
    setAuthors(allAuthors);
  }

  const handleOnDeleteClick = (indexOfAuthor: number) => {
    if (!authors) {
      return;
    }

    const allAuthors: IAuthor[] = authors.slice();
    allAuthors.splice(indexOfAuthor, 1);
    setAuthors(allAuthors);
  }

  const handleOnAuthorUpdateClick = (indexOfAuthor: number) => {
    setAuthorToUpdateIndex(indexOfAuthor);
  }

  const handleOnAuthorUpdated = (updatedAuthor: IAuthor) => {
    if (!authors || authorToUpdateIndex === null) {
      return;
    }

    const allAuthors: IAuthor[] = authors.slice();
    allAuthors.splice(authorToUpdateIndex, 1, updatedAuthor);
    setAuthors(allAuthors);

    setIsFormVisible(false);
  }

  return (
    <Row className="authors pt-2">
      <Col xs={12} className="px-5">
        <AuthorTitle/>
        {(!authors || authors.length === 0) && <EmptyLabel/>}
        {(authors && authors.length > 0) && <AuthorsList authors={authors} onDeleteClick={handleOnDeleteClick}
                                                         onUpdateClick={handleOnAuthorUpdateClick}/>}
        <AddAuthor onAddAuthorClick={handleOnAddAuthorClick}/>

        {isFormVisible && <AuthorForm
          onCloseClick={handleOnCloseFormClick}
          onAuthorCreated={handleOnAuthorCreated}
          authorToUpdate={authorToUpdate}
          onAuthorUpdated={handleOnAuthorUpdated}
        />}
      </Col>
    </Row>
  )
}

export default Authors;

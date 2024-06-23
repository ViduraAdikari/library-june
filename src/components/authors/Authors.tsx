import {FC, useState} from "react";
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

  const handleOnAddAuthorClick = () => {
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

  return (
    <Row className="authors pt-2">
      <Col xs={12} className="px-5">
        <AuthorTitle/>
        {(!authors || authors.length === 0) && <EmptyLabel/>}
        {(authors && authors.length > 0) && <AuthorsList authors={authors} onDeleteClick={handleOnDeleteClick}/>}
        <AddAuthor onAddAuthorClick={handleOnAddAuthorClick}/>
        {isFormVisible && <AuthorForm
          onCloseClick={handleOnCloseFormClick}
          onAuthorCreated={handleOnAuthorCreated}
        />}
      </Col>
    </Row>
  )
}

export default Authors;

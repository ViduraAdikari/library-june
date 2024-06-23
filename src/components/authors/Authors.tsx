import {FC, useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AuthorTitle from "./AuthorTitle";
// import EmptyLabel from "./EmptyLabel";
import AddAuthor from "./AddAuthor";
import AuthorsList from "./AuthorsList";
import AuthorForm from "./AuthorForm";

const Authors: FC = () => {

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleOnAddAuthorClick = () => {
    setIsFormVisible(true);
  }

  const handleOnCloseFormClick = () => {
    setIsFormVisible(false);
  }

  return (
    <Row className="authors pt-2">
      <Col xs={12} className="px-5">
        <AuthorTitle/>
        {/*<EmptyLabel/>*/}
        <AuthorsList/>
        <AddAuthor onAddAuthorClick={handleOnAddAuthorClick}/>
        {isFormVisible && <AuthorForm onCloseClick={handleOnCloseFormClick}/>}
      </Col>
    </Row>
  )
}

export default Authors;

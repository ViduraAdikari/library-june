import {FC} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LibraryPhoto from "../assets/images/welcome.jpg";
import Image from "react-bootstrap/Image";

const Welcome: FC = () => {
  return (
    <Row className="welcome">
      <Col xs={12}>
        <h1 className="my-3">My Library</h1>
      </Col>
      <Col xs={12} className="px-0">
        <Image src={LibraryPhoto}/>
      </Col>
      <Col xs={12} className="text-end pt-2 pe-5 credits">
        <div className="me-5">
          Photo by <a
          href="https://unsplash.com/@annahunko?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Anna Hunko</a> on
          <a
            href="https://unsplash.com/photos/books-inside-library-ajE5goOGzZc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            {" "}Unsplash</a>
        </div>
      </Col>
    </Row>
  );
}

export default Welcome;

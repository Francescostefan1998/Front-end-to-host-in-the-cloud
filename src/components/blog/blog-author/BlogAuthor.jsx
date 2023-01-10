import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./styles.css";

const BlogAuthor = (props) => {
  return (
    <Row>
      <Col xs={2}>
        <Image />
      </Col>
      <Col>
        <div>by</div>
        <h6></h6>
      </Col>
    </Row>
  );
};

export default BlogAuthor;

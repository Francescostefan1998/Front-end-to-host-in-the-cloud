import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogAuthor from "../blog-author/BlogAuthor";
import "./styles.css";
const BlogItem = ({ post }) => {
  return (
    <div>
      {post.name}
      {
        <Link to={`/product/${post.id}`} className="blog-link">
          <Card className="blog-card">
            <Card.Img variant="top" className="blog-cover" />
            <Card.Body>
              <Card.Title>{post.name}</Card.Title>
            </Card.Body>
            <Card.Footer>{post.brand}</Card.Footer>
          </Card>
        </Link>
      }
    </div>
  );
};

export default BlogItem;

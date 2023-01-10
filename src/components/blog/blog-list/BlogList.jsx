import React from "react";
import { Col, Row } from "react-bootstrap";
import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";
import { useEffect } from "react";
import { useState } from "react";
const BlogList = (props) => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    console.log("useeffect triggered");
    async function fetchProducts() {
      const apiUrl = process.env.REACT_APP_BE;
      const resp = await fetch(`${apiUrl}/products`);
      const data = await resp.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <Row>
      {posts.map((post) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={post.title} {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;

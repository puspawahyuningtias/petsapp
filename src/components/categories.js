import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";

function Categories({ categories, filterItems }) {
  return (
    <Nav className="me-auto">
      {categories.map((category, index) => {
        return (
          <Nav.Link key={index} onClick={() => filterItems(category)}>
            {category.toUpperCase()}
          </Nav.Link>
        );
      })}
    </Nav>
  );
}

export default Categories;

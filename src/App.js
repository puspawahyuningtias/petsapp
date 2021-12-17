import React, { useState } from "react";
import Categories from "./components/categories";
import Menu from "./components/menu";
import data from "./components/data";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container } from "react-bootstrap";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <div>
      <Navbar expand="lg" fixed="top" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#">PATS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Categories categories={categories} filterItems={filterItems} />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="pt-5 mt-5">
        <Container>
          <Menu menuItems={menuItems} />
        </Container>
      </div>
    </div>
  );
}

export default App;

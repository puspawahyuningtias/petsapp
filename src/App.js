import React, { useState } from "react";
import "./App.css";
import Categories from "./components/categories";
import Menu from "./components/menu";
import menu from "./components/data";
import "./components/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <div className="App">
      <Navbar expand="lg" fixed="top" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">PATS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Categories categories={categories} filterItems={filterItems} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="pt-5">
        <Menu menuItems={menuItems} />
      </div>
    </div>
  );
}

export default App;

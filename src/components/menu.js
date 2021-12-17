import React from "react";

function Menu({ menuItems }) {
  return (
    <section className="menuList">
      {menuItems.map((menuItem) => {
        const { id, breed, img, desc } = menuItem;
        return (
          <article key={id}>
            <div className="menuImg">
              <img src={img} alt={breed} />
            </div>
            <div className="info">
              <header>
                <h4>{breed.toUpperCase()}</h4>
              </header>
              <p>{desc}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Menu;

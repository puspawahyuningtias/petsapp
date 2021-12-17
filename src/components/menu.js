import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

function Menu({ menuItems }) {
  return (
    <MDBRow className="row-cols-1 row-cols-md-3 g-4">
      {menuItems.map((menuItem) => {
        const { id, breed, img, desc } = menuItem;
        return (
          <MDBCol>
            <MDBCard key={id}>
              <MDBCardImage src={img} alt={breed} position="top" />
              <MDBCardBody>
                <MDBCardTitle>{breed.toUpperCase()}</MDBCardTitle>
                <MDBCardText>{desc}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        );
      })}
    </MDBRow>
  );
}

export default Menu;

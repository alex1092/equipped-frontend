import React from "react";
import { Container, Button,} from "react-bootstrap";
import Products from "../products/myProducts";
import { Link } from "react-router-dom";



export default function index({myProducts, user}) {
  const tender1 = [{ name: "Jimmy", length: "2 days", product: "vr headset" }];

  let tenderList = tender1.map((tender) => {
    return (
      <ul>
        <li>Name: {tender.name}</li>
        <li>Length: {tender.length}</li>
        <li>Product: {tender.product}</li>
      </ul>
    );
  });
  return (
    <div>
      <Container>
        <h1>Your tenders</h1>
        <p>You have a new tender</p>
        {tenderList}
        <Button>Accept</Button>
      </Container>
      <Container>
        <Link to='/products/myProducts'><Button>View My Products</Button></Link>
       <Link to="/products/new"> <Button>Add New Item</Button></Link>
      </Container>
    </div>
  );
} 

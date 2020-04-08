import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const GoogleJumbo = (props) => {
  return (
    <div className="text-center" style={{ margin: "50px" }} >
      <Jumbotron fluid>
        <Container style={{ padding: "50px"}} fluid>
          <h1 className="display-3">(React) Google Books Search</h1>
          <h2 >Search for and Save Books of Interest</h2>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default GoogleJumbo;
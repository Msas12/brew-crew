import React from "react";
import { Card } from "react-bootstrap";

const Brewery = ({ brewery }) => {
  return (
    <div className="container">
      <Card>
        <Card.Body>
          <Card.Title tag="h5">{brewery.name}</Card.Title>
          <Card.Subtitle tag="h6" className="mb-2 text-muted">
            {brewery.type}
          </Card.Subtitle>
        </Card.Body>
        <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};
// {"id":12697,"obdb_id":"missouri-beer-company-o-fallon","name":"Missouri Beer Company","brewery_type":"micro","street":"22 W Industrial Dr","address_2":null,"address_3":null,"city":"O Fallon","state":"Missouri","county_province":null,"postal_code":"63366-1926","country":"United States","longitude":"-90.75261","latitude":"38.805938","phone":"6362946672","website_url":"http://www.mobeerco.com","updated_at":"2018-08-11T21:38:09.000Z","created_at":"2018-07-24T01:33:41.000Z"}
export default Brewery;

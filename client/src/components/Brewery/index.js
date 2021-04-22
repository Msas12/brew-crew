import React from "react";
import { Card } from "react-bootstrap";
// import OpengraphReactComponent from "opengraph-react";
import OpenGraph from "../OpenGraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDirections,
  faGlobe,
  faPhone,
  faBeer,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Brewery = ({ brewery }) => {
  // const handleDirections = (latitude, longitude) => {
  //   const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
  //   window.open(url, '_blank');
  // };

  // const handleWebsite = () => {
  //   window.open(website_url, '_blank');
  // };

  return (
    <Card className="bg-dark text-light h-100">
      <Card.Title className="text-center mt-3" tag="h5">
        {brewery.name}
      </Card.Title>
      <Card.Subtitle tag="h6" className="mb-2 text-center text-muted">
        {brewery.city}, {brewery.state}
      </Card.Subtitle>

      <Card.Body className="mx-auto" style={{ margin: "0 auto" }}>
        {!brewery.website_url ? (
          <div className="row">
            <img
              className="w-50 mt-4"
              src={`${process.env.PUBLIC_URL}/imgs/localbrewery.png`}
            />
            <p
              className="mt-4 ml-2 textWrapperSmall"
              style={{ fontSize: "12px" }}
            >
              Website currently not provided by Brewery
            </p>
          </div>
        ) : (
          <OpenGraph
            url={brewery.website_url}
            loader={<FontAwesomeIcon size="2x" icon={faBeer} spin />}
          />
          // <OpengraphReactComponent
          //   className="text-center"
          //   site={brewery.website_url}
          //   appId="a40315e9-aa31-4aca-93b0-189ca53eff7c"
          //   size={"small"}
          // />
        )}
      </Card.Body>

      <Card.Footer className="text-center w-100">
        <Card.Link href="#">
          <FontAwesomeIcon size="2x" icon={faDirections} />
        </Card.Link>
        <Card.Link href="#">
          <FontAwesomeIcon size="2x" icon={faGlobe} />
        </Card.Link>
        <Card.Link href="#">
          <FontAwesomeIcon size="2x" icon={faPhone} />
        </Card.Link>
      </Card.Footer>
    </Card>
  );
};
// {"id":12697,"obdb_id":"missouri-beer-company-o-fallon","name":"Missouri Beer Company","brewery_type":"micro","street":"22 W Industrial Dr","address_2":null,"address_3":null,"city":"O Fallon","state":"Missouri","county_province":null,"postal_code":"63366-1926","country":"United States","longitude":"-90.75261","latitude":"38.805938","phone":"6362946672","website_url":"http://www.mobeerco.com","updated_at":"2018-08-11T21:38:09.000Z","created_at":"2018-07-24T01:33:41.000Z"}

export default Brewery;

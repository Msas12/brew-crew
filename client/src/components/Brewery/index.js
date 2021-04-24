import React from "react";
import { Card } from "react-bootstrap";
import OpenGraph from "../OpenGraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDirections,
  faPhone,
  faBeer,
  faHeart as fasHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faLyft as farLyft } from "@fortawesome/free-brands-svg-icons";
import "./style.css";

const Brewery = ({ brewery }) => {
  const handleDirections = (latitude, longitude) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${brewery.latitude},${brewery.longitude}`;
    window.open(url, "_blank");
  };
  const getFormattedPhoneNumber = (phone) => {
    var cleaned = ("" + phone).replace(/\D/g, "");
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = match[1] ? "+1 " : "";
      return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
    }
    return null;
  };

  const handlePhone = (phone) => {
    const telephoneNumber = getFormattedPhoneNumber(brewery.phone);
    const url = "tel:" + telephoneNumber;
    window.open(url, "_blank");
  };

  const handleLyft = () => {
    const url = "https://www.lyft.com/"
    window.open(url, "_blank");
  };

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
              className="w-25 h-25 ml-5 mt-4"
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
        )}
      </Card.Body>

      <Card.Footer className="text-center w-100">
        <Card.Link href="#">
          <FontAwesomeIcon
            style={{ color: "#d4af49" }}
            size="2x"
            icon={faDirections}
            onClick={handleDirections}
          />
        </Card.Link>
        <Card.Link href="#">
          <FontAwesomeIcon
            style={{ color: "#d4af49" }}
            size="2x"
            icon={faPhone}
            onClick={handlePhone}
          />
        </Card.Link>
        <Card.Link href="#">
          <FontAwesomeIcon
            style={{ color: "#d4af49" }}
            size="2x"
            icon={farLyft}
            onClick={handleLyft}
          />
        </Card.Link>
        <Card.Link href="#">
          <FontAwesomeIcon
            style={{ color: "#d4af49" }}
            size="2x"
            icon={farHeart}
          />
        </Card.Link>
      </Card.Footer>
    </Card>
  );
};

export default Brewery;

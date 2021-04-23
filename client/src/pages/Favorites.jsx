import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHardHat, faHammer } from "@fortawesome/free-solid-svg-icons";

function Favorites() {
  return (
    <div className="text-center">
      <h1 style={{ color: "#d4af49" }}>Under Maintenance: COMING SOON</h1>
      <FontAwesomeIcon
        className="m-1"
        style={{ color: "#d4af49" }}
        size="4x"
        icon={faHardHat}
      />
      <FontAwesomeIcon
        className="m-1"
        style={{ color: "#d4af49" }}
        size="4x"
        icon={faHammer}
      />
    </div>
  );
}

export default Favorites;

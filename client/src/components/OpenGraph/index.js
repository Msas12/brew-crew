import React, { useEffect, useState } from "react";
import axios from "axios";

const OpenGraph = (props) => {
  const [state, setState] = useState({});
  useEffect(() => {
    let URL = encodeURIComponent(props.url);
    axios
      .get(
        `https://opengraph.io/api/1.1/site/${URL}?app_id=a40315e9-aa31-4aca-93b0-189ca53eff7c`
      )
      .then((data) => {
        console.log("abc", data);
        setState({ og: data.data.htmlInferred });
      });
  }, []);
  return (
    <div>
      {!state.og ? (
        ""
      ) : (
        <div className="outerWrapperSmall">
          <div style={{ flex: 1 }}>
            <div className={"imgWrapperSmall"}>
              <img
                className={"responsiveImage"}
                src={state.og.image}
                alt={"alt"}
              />
            </div>
          </div>
          <div className={"textWrapperSmall"}>
            <div className={"siteNameLinkWrapper"}>
              <a href={props.url}>{state.og.site_name}</a>
            </div>
            {/* <div className={"titleWrapper"}>
             {goodOffer && this.renderPrice(goodOffer, resultsToUse)}
           </div>
           {!!goodProduct.totalRating && this.renderStarsForRating(goodProduct.totalRating)} */}
            <p>{state.og.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpenGraph;

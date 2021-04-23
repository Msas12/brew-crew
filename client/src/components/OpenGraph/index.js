import React, { useEffect, useState } from "react";
import axios from "axios";

const OpenGraph = (props) => {
  const [state, setState] = useState({});
  useEffect(() => {
    let URL = encodeURIComponent(props.url);
    axios
      .get(
        `https://opengraph.io/api/1.1/site/${URL}?app_id=77d352cb-7d58-48e2-b7c0-0f2806ee2352	`
      )
      .then((data) => {
        console.log("abc", data);
        setState({ og: data.data.htmlInferred });
      })
      .catch((err) => {
        console.log(err);
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
              {!state.og.image ? (
                <img
                  className="w-100"
                  src={`${process.env.PUBLIC_URL}/imgs/localbrewery.png`}
                />
              ) : (
                <img
                  className={"responsiveImage"}
                  src={state.og.image}
                  alt={"alt"}
                />
              )}
            </div>
          </div>
          <div className={"textWrapperSmall"}>
            <div className={"siteNameLinkWrapper"}>
              <a
                style={{ fontSize: "14px", color: "#d4af49" }}
                href={props.url}
              >
                {state.og.site_name}
              </a>
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

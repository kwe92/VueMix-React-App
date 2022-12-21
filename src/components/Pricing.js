import React, { Fragment } from "react";
import { packages } from "../constants/packageData";
import * as style from "../styles/styled_components/pricePageStyles";
// Nested arrays
const wrappedPackages = packages.map((subType) =>
  subType.map((type) => <li key={type.replaceAll(" ", "")}>{type}</li>)
);

console.log("wrapped packages: ", wrappedPackages);

const buttonText = "Subscribe Now";

const Pricing = (props) => {
  return (
    <style.SubscribeContentWrapper>
      {
        <>
          <style.SubscribeCard isLightMode={props.mode}>
            <h1 className="header"> Basic </h1>
            <p className="price">
              $7.99 <span>/Month</span>
            </p>
            <ul>{wrappedPackages[0]}</ul>
            <style.SubscribeButton type="button">
              {buttonText}
            </style.SubscribeButton>
          </style.SubscribeCard>

          <style.SubscribeCard isLightMode={props.mode}>
            <h1 className="header"> Standard </h1>
            <p className="price">
              $12.99 <span>/Month</span>
            </p>
            <ul>{wrappedPackages[1]}</ul>
            <style.SubscribeButton type="button">
              {buttonText}
            </style.SubscribeButton>
          </style.SubscribeCard>

          <style.SubscribeCard isLightMode={props.mode}>
            <h1 className="header"> Premium </h1>
            <p className="price">
              $18.99 <span>/Month</span>
            </p>
            <ul>{wrappedPackages[2]}</ul>
            <style.SubscribeButton type="button">
              {buttonText}
            </style.SubscribeButton>
          </style.SubscribeCard>
        </>
      }
    </style.SubscribeContentWrapper>
  );
};

export default Pricing;

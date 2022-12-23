import React from "react";
import { packages, bundles } from "../constants/packageData";
import * as style from "../styles/styled_components/pricePageStyles";
// TODO: Shorten this component to keep code DRY
// Nested arrays
const wrappedPackages = packages.map((subType) =>
  subType.map((type) => <li key={type.replaceAll(" ", "")}>{type}</li>)
);

console.log("wrapped packages: ", wrappedPackages);

const buttonText = "Subscribe Now";
const subBy = "/Month";

const Pricing = (props) => {
  const bundlesList = bundles.map((bundle) => {
    return (
      //TODO: Fix this div
      //TODO: Should be its own component
      <div
        style={{
          background: "white",
          borderRadius: "20px",
          width: "30vw",
          height: "42vw",
        }}
      >
        <style.SubscribeCard
          isLightMode={props.mode}
          key={bundle.name + bundle.index}
        >
          <h1 className="header"> {bundle.name} </h1>
          <p className="price">
            {bundle.price} <span>{subBy}</span>
          </p>
          {/* UL SHOULD BE ALIGNED CENTER!! */}
          <ul style={{ paddingLeft: "2rem", paddingRight: "1rem" }}>
            {wrappedPackages[bundle.index]}
          </ul>
          <style.SubscribeButton type="button">
            {buttonText}
          </style.SubscribeButton>
        </style.SubscribeCard>
      </div>
    );
  });

  console.log("bundles list", bundlesList);

  return (
    <style.SubscribeContentWrapper>{bundlesList}</style.SubscribeContentWrapper>
  );
};

export default Pricing;

import React from "react";
import { packages, bundles } from "../../constants/packageData";
import * as style from "./PricingStyles";
// Nested arrays
const wrappedPackages = packages.map((subType) =>
  subType.map((type) => <li key={type.replaceAll(" ", "")}>{type}</li>)
);

const buttonText = "Subscribe Now";
const subBy = "/Month";

const Pricing = (props) => {
  const bundlesList = bundles.map((bundle) => {
    const CardTopSection = (
      <>
        <h1 className="header"> {bundle.name} </h1>
        <p className="price">
          {bundle.price} <span>{subBy}</span>
        </p>
      </>
    );

    const CardBullets = (
      <ul style={{ paddingLeft: "2rem", paddingRight: "1rem" }}>
        {wrappedPackages[bundle.index]}
      </ul>
    );

    const CardButton = (
      <style.SubscribeButton type="button">{buttonText}</style.SubscribeButton>
    );
    return (
      <style.CardBlankCanvas>
        <style.SubscribeCard
          isLightMode={props.isLightMode}
          key={bundle.name + bundle.index}
        >
          {CardTopSection}
          {CardBullets}
          {CardButton}
        </style.SubscribeCard>
      </style.CardBlankCanvas>
    );
  });

  console.log("bundles list", bundlesList);

  return (
    <style.SubscribeContentWrapper>{bundlesList}</style.SubscribeContentWrapper>
  );
};

export default Pricing;

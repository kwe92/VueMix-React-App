const basicPackage = [
  "Unlimited movies and tvshows",
  "Stream on mobile devices",
  "Cancel at any time",
  "First month completely free",
];

const standardPackage = [...basicPackage, "HD movies and tv shows"];

const premiumPackage = [...standardPackage, "4k movies and tv shows"];

export const packages = [basicPackage, standardPackage, premiumPackage];

export const bundles = [
  { name: "Basic", price: "$7.99", index: 0 },
  { name: "Standard", price: "$12.99", index: 1 },
  { name: "Premium", price: "$18.99", index: 2 },
];

import React from "react";

export const CustomElements = {
  ListItem: ({ className, children }) => (
    <li className={className} style={{ listStyleType: "none" }}>
      {children}
    </li>
  ),
};

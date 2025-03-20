import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RouterProps } from "./Router.types";
import { NestedRouter } from "./NestedRouter";

export const Router: React.FC<RouterProps> = (props) => {
  const { layout: Component, routes } = props;
  
  return (
    <BrowserRouter>
      {Component !== undefined ? (
        <Component>
          <NestedRouter
            routes={routes}
          />
        </Component>
      ) : (
        <NestedRouter
          routes={routes}
        />
      )}
    </BrowserRouter>
  )
}
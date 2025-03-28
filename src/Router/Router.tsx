import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { RouterProps, RoutesPathnamesMap } from "./Router.types";
import { NestedRouter } from "./NestedRouter";
import { parseRoutesPathnames } from "utils";

export const Router: React.FC<RouterProps> = (props) => {
  const { layout: Component, routes } = props;

  useEffect(() => {
    const routesPathnames: RoutesPathnamesMap = {};

    parseRoutesPathnames(routesPathnames, routes);

    props.onParseRoutesPathnamesMap(routesPathnames);
  }, [
    
  ])
  
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
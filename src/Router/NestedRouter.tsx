import React from "react";
import { NestedRouterProps } from "./Router.types";
import { Route, Routes } from "react-router-dom";

export const NestedRouter: React.FC<NestedRouterProps> = (props) => {
  return (
    <>
      <Routes>
        {props.routes.map((route, key) => (
          <Route
            key={key}
            path={Array.isArray(route.element)
              ? `${route.path}/*`
              : route.path}
            element={Array.isArray(route.element)
              ? <NestedRouter routes={route.element} />
              : route.element}
          />
        ))}
      </Routes>
    </>
  )
}
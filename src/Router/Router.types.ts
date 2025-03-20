import React from 'react';

export type RouteConfig = {
  index?: true;
  helmet?: any,
  breadcrumb?: {
    label: string;
    icon?: React.ReactNode;
  },
  path: string;
  pathRegex?: RegExp;
  element: React.ReactNode | RouteConfig[];
}

export type NestedRouterProps = {
  routes: RouteConfig[];
}

export type RouterProps = {
  routes: RouteConfig[];
  layout?: React.ElementType;
}

export type RoutesPathnamesMap = {
  [path: string]: {
    regex?: RegExp;
    helmet?: any;
    breadcrumb: {
      label: string;
      icon?: React.ReactNode;
    }
  }
}
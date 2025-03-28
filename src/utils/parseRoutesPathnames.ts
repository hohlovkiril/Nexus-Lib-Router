import { RouteConfig, RoutesPathnamesMap } from "../Router";

export function parseRoutesPathnames(
  pathnames: RoutesPathnamesMap,
  routes: RouteConfig[],
  parentPath?: string,
) {
  routes.forEach((route: RouteConfig) => {
    if (!parentPath) {
      pathnames[route.path] = {
        regex: route.pathRegex,
        helmet: route.helmet,
        breadcrumb: route.breadcrumb,
      }

      if (Array.isArray(route.element)) {
        parseRoutesPathnames(pathnames, route.element, route.path);
      }
    } else {
      const path = `${parentPath}${route.path}`;
      
      pathnames[path] = {
        regex: route.pathRegex,
        helmet: route.helmet,
        breadcrumb: route.breadcrumb,
      }

      if (Array.isArray(route.element)) {
        parseRoutesPathnames(pathnames, route.element, path);
      }
    }
  })
}
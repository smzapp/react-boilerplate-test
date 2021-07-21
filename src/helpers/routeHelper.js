import React from "react"

const configureAdminRoute = ({ base, routes}) => {
  return routes.map((route, index) => {
    const { path } = route;
    return {
      ...route,
      path: `${base}${path}`
    };
  });
}

export {
  configureAdminRoute,
}
/**
 * @param string, object
 */
const configureChildren = (base, route) => {
  const { children } = route;
  const subMenu = children.map(child => {
    const {path} = child;
    return {...child, path: `${base}${route.path}${path}` }
  });

  return {
    ...route,
    children: subMenu
  };
}

/**
 * @param string, object
 */
const configureAdminRoute = ({ base, routes}) => {
  return routes.map((route) => {
    const { path } = route;
    const { children } = route;
    if (typeof children != 'undefined') {
      return configureChildren(base, route);
    } else {
      return {
        ...route,
        path: `${base}${path}`
      };
    }
  });
}

export {
  configureAdminRoute,
  configureChildren,
}
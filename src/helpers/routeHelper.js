/**
 * @param string, object
 */
const configureChildren = (route) => {
  const { children } = route;
  const subMenu = children.map(child => {
    const {path} = child;
    return {...child, path: `${route.path}${path}` }
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
  const result = routes.map((route) => {
    const { path } = route;
    const { children } = route;
    let parentRoute = {
      ...route,
      path: `${base}${path}`
    };
    if (typeof children != 'undefined') {
      return configureChildren(parentRoute);
    }
    return parentRoute;
  });
 
  return result;
}

export {
  configureAdminRoute,
  configureChildren,
}
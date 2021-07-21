import { configureAdminRoute } from "../../helpers/routeHelper";
import userRoutes from "./userRoutes";

const base = '/admin-control';

const routes = [
  {
    path: '/login',
    title: 'Login',
    icon: 'fa fa-user'
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'fa fa-dashboard',
  },
  {
    path: '/posts',
    title: 'Posts',
    children: [
      {
        path: '/create',
        title: 'Create Post'
      }
    ]
  },
  userRoutes,
]

const AdminRoutes = configureAdminRoute({
  base: base,
  routes: routes
});

export default AdminRoutes;
import { configureAdminRoute } from "../../helpers/routeHelper";

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
  }
]

const AdminRoutes = configureAdminRoute({
  base: base,
  routes: routes
});

console.log(AdminRoutes);

export default AdminRoutes;
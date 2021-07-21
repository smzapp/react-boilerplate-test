import AdminRoutes from "./admin/AdminRoutes";
import FrontRoutes from "./front/FrontRoutes";

/**
 * Merge user's routes and with admin
 */
const MainRoutes = FrontRoutes.concat(AdminRoutes);

export default MainRoutes;
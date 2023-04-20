// routeConfig
import routesConfig from '~/config/routes';

// Layouts Header
import { HeaderOnly } from '~/components/Layout';

// Router change Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Settings from '~/pages/Settings';
import Coin from '~/pages/Coin';

// Public routes
const publicRoutes = [
    // câu lệnh để chèn component vào app thông qua router
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    // link profile by nickname
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.settings, component: Settings },
    { path: routesConfig.coin, component: Coin },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

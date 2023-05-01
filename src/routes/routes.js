// routeConfig
import config from '~/config';

// Layouts Header
import { HeaderOnly } from '~/layouts';

// Router change Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Settings from '~/pages/Settings';
import Coin from '~/pages/Coin';
import Live from '~/pages/Live';

// Public routes
const publicRoutes = [
    // câu lệnh để chèn component vào app thông qua router
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    // link profile by nickname
    { path: config.routes.search, component: Profile },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.settings, component: Settings },
    { path: config.routes.coin, component: Coin },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.live, component: Live },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

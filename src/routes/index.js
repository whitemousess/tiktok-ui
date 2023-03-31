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
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/settings', component: Settings },
    { path: '/coin', component: Coin },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import config from '~/config';
import * as userService from '~/services/userService';
import * as followService from '~/services/userService';
import Menu, { MenuItem } from './Menu';
import Discover from '~/components/Discover';
import FooterSidebar from './FooterSidebar';
import Following from '~/components/Following';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import LoginSideBar from './LoginSideBar';

const cx = classNames.bind(styles);
const PER_PAGE = 5;

function Sidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [followings, setFollowings] = useState([]);

    const currentUser = false;

    useEffect(() => {
        // call Api User
        userService
            .getSuggested({ page: 1, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUsers((preUser) => [...preUser, ...data]);
            })
            .catch((error) => console.log(error));

        // call Api follow
        followService
            .getSuggested({ page: 1, perPage: PER_PAGE })
            .then((data) => {
                setFollowings((preFollow) => [...preFollow, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);
    
    return (
        <aside className={cx('wrapper')}>
            {/* Menu sidebar */}
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            {!currentUser && <LoginSideBar />}

            {/* Suggested accounts */}
            <SuggestedAccounts label="Suggested accounts" data={suggestedUsers} />

            {/* Following accounts */}
            {currentUser && <Following label="Following accounts" data={followings} />}

            {/* Discover */}
            <Discover label="Discover" />

            {/* Footer */}
            <FooterSidebar />
        </aside>
    );
}

export default Sidebar;

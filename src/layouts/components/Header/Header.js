import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faCircleQuestion,
    faEarthAsia,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

// route dom in /config/routes
import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import { Message, UploadIcon, MailBox } from '~/components/Icons';
import Search from '../search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    title: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    title: 'language',
                    code: 'vi',
                    title: 'Tiếng việt',
                },
                {
                    title: 'language',
                    code: 'CN',
                    title: 'China',
                },{
                    title: 'language',
                    code: 'CA',
                    title: 'Canada',
                },{
                    title: 'language',
                    code: 'BE',
                    title: 'BELGIUM',
                },{
                    title: 'language',
                    code: 'AL',
                    title: 'ALBANIA',
                },{
                    title: 'language',
                    code: 'AO',
                    title: 'ANGOLA',
                },{
                    title: 'language',
                    code: 'AU',
                    title: 'AUSTRALIA',
                },{
                    title: 'language',
                    code: 'CG',
                    title: 'CONGO',
                },
                
            ],
            
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = false;


    // handle login
    const handleMenuChange = (MenuItem) => {
        switch (MenuItem.type) {
            case 'language':
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coin',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* how to use Config */}
                <Link to={config.routes.home} onClick={() => config.routes.home.reload()} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                {/* search */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom" delay={[0, 0]}>
                                <button className={cx('action-btn')}  >
                                    <Link to={config.routes.upload}><UploadIcon /></Link>
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement="bottom" delay={[0, 0]}>
                                <button className={cx('action-btn')}>
                                    <Message />
                                </button>
                            </Tippy>
                            <Tippy content="MailBox" placement="bottom" delay={[0, 0]}>
                                <button className={cx('action-btn')}>
                                    <MailBox />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('users-avatar')}
                                src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/335264727_1949622308715153_9016707167560481744_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=G4QABx3ENhkAX9MkSw8&_nc_ht=scontent.fhan18-1.fna&oh=00_AfBQC7jv29ftg53BMPZpP74xuK3O4QLykovRY2rxLFRH7g&oe=644DFB00"
                                alt={'Nguyen Van A'}
                                // fallback="https://i.pinimg.com/originals/8b/46/35/8b4635fd93dc6e874f686435da83a210.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('footer-link')}>
                <Link to="/">About</Link>
                <Link to="/">Newsroom</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Careers</Link>
                <Link to="/">ByteDance</Link>
            </div>
            <div className={cx('footer-link')}>
                <Link to="/">TikTok for Good</Link>
                <Link to="/">Advertise</Link>
                <Link to="/">Developers</Link>
                <Link to="/">Transparency</Link>
                <Link to="/">TikTok Rewards</Link>
                <Link to="/">TikTok Browse</Link>
                <Link to="/">TikTok Embeds</Link>
            </div>
            <div className={cx('footer-link')}>
                <Link to="/">Help</Link>
                <Link to="/">Safety</Link>
                <Link to="/">Terms</Link>
                <Link to="/">Privacy</Link>
                <Link to="/">Creator Portal</Link>
                <Link to="/">Community Guidelines</Link>
            </div>
            <span className={cx('copyright')}>© 2023 TikTok</span>
        </div>
    );
}

export default Footer;

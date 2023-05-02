import classNames from 'classnames/bind';
import styles from './LoginSideBar.module.scss';
import Button from '~/components/Button/button';

const cx = classNames.bind(styles);

function LoginSideBar() {
    return ( <div className={cx('wrapper')}>
        <div className={cx('title-login')}>
            <p>Log in to follow creators, like videos, and view comments.</p>
        </div>
        <Button className={cx('login-btn')} outline>Login</Button>
    </div>);
}

export default LoginSideBar;
import classNames from 'classnames/bind';
import Header from '~/components/Layouts/components/Header';
import SiderBar from './SiderBar';
import styles from './defaultLayout.module.scss';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('defaultLayout')}>
            <Header />
            <div className={cx('container')}>
                <SiderBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;

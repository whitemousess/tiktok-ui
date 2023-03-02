import styles from './sidebar.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

function SiderBar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>SidE BAR</h2>
        </aside>
    );
}

export default SiderBar;

import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import { MusicIcon } from '../Icons';

const cx = classNames.bind(styles);

function DiscoverItem() {
    return (
        <div className={cx('discover-item')}>
            <MusicIcon />
            <p className={cx('song-name')}>Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n & BHMedia</p>
        </div>
    );
}

export default DiscoverItem;

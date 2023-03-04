import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4807ff80effbfefd179fcde414eb2efd~c5_300x300.webp?x-expires=1678096800&x-signature=X3mW%2FXDsHfpBa8UqDKK4b1E7SMc%3D"
                alt="Hoa"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen van a</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('userName')}>NguyenVanA</span>
            </div>
        </div>
    );
}

export default AccountItem;

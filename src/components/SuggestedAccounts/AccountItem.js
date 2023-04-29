import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/335264727_1949622308715153_9016707167560481744_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VA-tkpLZl8kAX-Ddu7e&_nc_ht=scontent.fhan18-1.fna&oh=00_AfCOJM8Yhv5jwdOUnUiDsJAoKwJum6ujZNjxpxK5KwwFGQ&oe=6451EF80"
                alt=""
                className={cx('avatar')}
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>Chuột Bạch</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </p>
                <p className={cx('name')}>chuotbach</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;

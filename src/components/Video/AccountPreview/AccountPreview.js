import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './AccountPreview.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image className={cx('avatar')} src={data.user.avatar} alt={data.user.nickname} />
                <Button className={cx('follow-btn')} outline>
                    Follow
                </Button>
            </header>
            <div className={cx('body')}>
                <div className={cx('item-infor')}>
                    <p className={cx('nickname')}>
                        <strong>{data.user.nickname}</strong>
                        {data.user.tick &&<FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                    </p>
                    <p className={cx('name')}>
                        <strong>{`${data.user.first_name} ${data.user.last_name}`}</strong>
                    </p>
                    <p className={cx('analytics')}>
                        <strong className={cx('value')}>{data.user.followers_count}</strong>
                        <span className={cx('label')}>Followers</span>
                        <strong className={cx('value')}>{data.user.likes_count}</strong>
                        <span className={cx('label')}>Likes</span>
                    </p>
                    <p className={cx('bio')}>
                        <span>
                        {data.user.bio}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    data:PropTypes.object.isRequired
}

export default AccountPreview;

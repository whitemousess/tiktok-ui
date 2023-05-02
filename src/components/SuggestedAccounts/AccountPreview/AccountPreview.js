import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/button';
import Image from '~/components/Image'

const cx = classNames.bind(styles);

function AccountPreview({data}) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src={data.avatar}
                    alt={data.nickname}
                />
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </header>
            <div className={cx('body')}>
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>{data.nickname}</strong>
                        {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                    </p>
                    <p className={cx('name')}>
                        <strong>{`${data.first_name} ${data.last_name}`}</strong>
                    </p>
                    <p className={cx('analytics')}>
                        <strong className={cx('value')}>{data.followers_count}</strong>
                        <span className={cx('label')}>Followers</span>
                        <strong className={cx('value')}>{data.likes_count}</strong>
                        <span className={cx('label')}>Likes</span>
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

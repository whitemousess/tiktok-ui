import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            // preView account
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data}/>
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} render={renderPreview} placement={'bottom'}>
                <Link to={`/@${data.nickname}`}>
                    <div className={cx('account-item')}>
                        <Image src={data.avatar} alt={data.nickname} className={cx('avatar')} />
                        <div className={cx('item-info')}>
                            <p className={cx('nickname')}>
                                <strong>{data.nickname}</strong>
                                {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                            </p>
                            <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                        </div>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data:PropTypes.object.isRequired
}

export default AccountItem;
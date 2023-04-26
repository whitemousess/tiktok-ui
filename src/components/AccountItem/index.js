import PropTypes from 'prop-types';
// add icon Font Awesome
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
// import classname and style module.scss
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

// đặt biến cx để sau này dùng làm style
const cx = classNames.bind(styles);

function AccountItem({data}) {
    return (
        // change div to Link
        // data is a API call object
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} 
                src={data.avatar} 
                alt={data.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick & <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}


// propTypes
AccountItem.propTypes = {
    data: PropTypes.object.isRequired
}

export default AccountItem;

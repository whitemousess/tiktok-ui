import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import styles from './Discover.module.scss';

import DiscoverItem from './DiscoverItem'

const cx = classNames.bind(styles);

function Discover({label}) {
    return ( 
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <DiscoverItem />
            <DiscoverItem />
            <DiscoverItem />
            <DiscoverItem />
            <DiscoverItem />
        </div>
     );
}

Discover.propTypes = {
    label: PropTypes.string.isRequired
}

export default Discover;
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function Following({ label, data = [] }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
        {/*loop through data*/}
            {data.map((account) => (
                <AccountItem key={account.id} data={account}/>
            ))}

            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

Following.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default Following;

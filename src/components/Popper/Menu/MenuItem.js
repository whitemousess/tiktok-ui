import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });

    return (
        // lấy dữ liểu để đổ vào popper chữ ảnh và icon
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

// propTypes
MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func
}

export default MenuItem;

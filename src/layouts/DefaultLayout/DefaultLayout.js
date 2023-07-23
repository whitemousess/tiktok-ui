import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from '~/layouts/components/Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children ,currentUser }) {
   
    return (
        <div className={cx('wrapper')}>
            <Header currentUser={currentUser}/>
            <div className={cx('container')}>
                <Sidebar currentUser={currentUser}/>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

// propTypes
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;

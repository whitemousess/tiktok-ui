import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './share.module.scss';
import { EmbedIcon, SentIcon, FacebookIcon, WhatappIcon, CopylinkIcon } from '../Icons';

const cx = classNames.bind(styles);

function Share() {
    return (
        <div className={cx('wrapper')}>
            <Link to="/" className={cx('container')}>
                <EmbedIcon />
                <span className={cx('title')}>Embed</span>
            </Link>
            <Link to="/" className={cx('container')}>
                <SentIcon />
                <span className={cx('title')}>Send to friend</span>
            </Link>
            <Link to="/" className={cx('container')}>
                <FacebookIcon />
                <span className={cx('title')}>Share to Facebook</span>
            </Link>
            <Link to="/" className={cx('container')}>
                <WhatappIcon />
                <span className={cx('title')}>Share to WhatsApp</span>
            </Link>
            <Link to="/" className={cx('container')}>
                <CopylinkIcon />
                <span className={cx('title')}>Copy link</span>
            </Link>
        </div>
    );
}

export default Share;

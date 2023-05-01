import classNames from 'classnames/bind';
import styles from './menu.module.scss';
import { EmbedIcon, SentIcon, FacebookIcon, WhatappIcon, CopylinkIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function MenuShare() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('share-menu')}><EmbedIcon />
            <span className={cx('title')}>Embed</span>
            </div>
            <div className={cx('share-menu')}><SentIcon /> 
            <span className={cx('title')}>Send to friends</span>
            </div>
            <div className={cx('share-menu')}><FacebookIcon />
            <span className={cx('title')}>Share to Facebook</span>
            </div>
            <div className={cx('share-menu')}><WhatappIcon /> 
            <span className={cx('title')}>Share to Whatapp</span>
            </div>
            <div className={cx('share-menu')}><CopylinkIcon /> 
            <span className={cx('title')}>Copy link</span>
            </div>
        </div>
    );
}

export default MenuShare;

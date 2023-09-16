import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import ReactPlayer from 'react-player';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { faCheckCircle, faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Video.module.scss';
import { MusicIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Button from '~/components/Button/button';
import AccountPreview from './AccountPreview';
import Share from '~/components/Share';

const cx = classNames.bind(styles);

function VideoItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };

    const renderMenuShare= (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <Share />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <div>
                        <Tippy
                            interactive
                            delay={[800, 0]}
                            offset={[-20, 0]}
                            render={renderPreview}
                            placement={'bottom'}
                        >
                            <Link to={`/@${data.user.nickname}`}>
                                <Image className={cx('avatar')} src={data.user.avatar} alt={data.user.nickname} />
                            </Link>
                        </Tippy>
                    </div>
                    <div className={cx('content')}>
                        <div>
                            <Tippy
                                interactive
                                delay={[800, 0]}
                                offset={[-20, 0]}
                                render={renderPreview}
                                placement={'bottom'}
                            >
                                <Link to={`/@${data.user.nickname}`}>
                                    <div className={cx('account-info')}>
                                        <strong className={cx('nickname')}>{data.user.nickname}</strong>
                                        {data.user.tick && (
                                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                                        )}
                                        <strong
                                            className={cx('name')}
                                        >{`${data.user.first_name} ${data.user.last_name}`}</strong>
                                    </div>
                                </Link>
                            </Tippy>
                        </div>
                        <div className={cx('description')}>
                            <p className={cx('status')}>{data.description}</p>
                            <strong className={cx('song-name')}>
                                <MusicIcon />
                                {data.music}
                            </strong>
                        </div>
                    </div>
                    <div>
                        <Button outline className={cx('follow-btn')}>
                            follow
                        </Button>
                    </div>
                </div>
                <div className={cx('body')}>
                    <div className="video">
                        <ReactPlayer
                            width="336px"
                            height="600px"
                            playing={false}
                            volume={0.2}
                            controls
                            className={cx('react-player')}
                            url={data.file_url}
                        />
                    </div>

                    <div className={cx('active-item')}>
                        <div className={cx('active-item-icon')}>
                            <div className={cx('icon')}>
                                <FontAwesomeIcon icon={faHeart} className={cx('active-icon')} />
                            </div>
                            <p className={cx('count')}>{data.likes_count}</p>
                        </div>
                        <div className={cx('active-item-icon')}>
                            <div className={cx('icon')}>
                                <FontAwesomeIcon icon={faCommentDots} className={cx('active-icon')} />
                            </div>
                            <p className={cx('count')}>{data.comments_count}</p>
                        </div>

                        <Tippy interactive
                            delay={[0, 500]}
                            offset={[-20, 0]}
                            render={renderMenuShare}
                            placement={'bottom'}>
                            <div className={cx('active-item-icon')}>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faShare} className={cx('active-icon')} />
                                </div>
                                <p className={cx('count')}>{data.shares_count}</p>
                            </div>
                        </Tippy>


                    </div>
                </div>
            </div>
        </div>
    );
}

VideoItem.propTypes = {
    data: PropTypes.object.isRequired
}

export default VideoItem;

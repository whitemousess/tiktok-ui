import { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import * as videoService from '~/services/videoService';
import Video from '~/components/Video';

const cx = classNames.bind(styles);

function Home() {
    const [video, setVideo] = useState([]);

    useEffect(() => {

        // call api video
        videoService
            .getVideo({ type: 'for-you' })
            .then((data) => {
                setVideo((preVideo) => [...preVideo, ...data]);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <Video data={video}/>
            </div>
        </div>
    );
}

export default Home;

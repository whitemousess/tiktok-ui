import PropTypes from 'prop-types'

import VideoItem from './VideoItem';
function Video({ data = [] }) {
    return (
        <div>
            {data.map((video) => (
                <VideoItem key={video.id} data={video}/>
            ))}
        </div>
    );
}

Video.propTypes = {
    data: PropTypes.array
}

export default Video;

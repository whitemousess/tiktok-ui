import * as httpRequest from '~/utils/httprequest';

export const getVideo = async ({type}) => {
    try {
        const res = await httpRequest.get('videos', {
            params: {
                type
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};


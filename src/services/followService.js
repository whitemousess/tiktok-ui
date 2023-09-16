import * as httpRequest from '~/utils/httprequest';

export const getFollow = async ({page, perPage}) => {
    try {
        const res = await httpRequest.get('users/followings', {
            params: {
                page,
                per_page: perPage,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

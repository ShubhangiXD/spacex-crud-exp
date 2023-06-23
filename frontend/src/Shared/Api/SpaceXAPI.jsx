import { localURL } from '../../Configuration/config';

export const getSpaceXAPI = async () => {
    try {
        const spaceURLfinal = localURL + `rocket/rockets`;
        const spaceDataFetch = await fetch(spaceURLfinal);
        const spaceData = await spaceDataFetch.json();
        return spaceData;
    } catch (error) {
        console.error("SpaceX error: ", error.message);
        return error;
    };
};
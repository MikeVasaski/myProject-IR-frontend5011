import api from "./BackAPI";

export const getAnimeData = async (params) => {
    return await api
        .get("/", {
            params:params,
        })
};
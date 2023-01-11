import api from "./BackAPI";

export const searchApi = async (params) => {
    return await api
        .post("/serach", null, { params: params })
};
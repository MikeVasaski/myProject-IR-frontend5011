import api from "./BackAPI";

export const login = async (params) => {
    return await api
        .post("/login", null, { params: params})
}
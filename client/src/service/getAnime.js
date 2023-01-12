import apiClient from "./apiClient";

export const getAnime = async () => {
    return await apiClient
        .get('/')
}
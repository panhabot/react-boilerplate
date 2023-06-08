import { BaseAPI } from "../api/BaseAPI";

export const getPostResponse = async () => {
    const data = await BaseAPI.get("/posts").then((response) => {
      return response.data;
    });
    return data
};

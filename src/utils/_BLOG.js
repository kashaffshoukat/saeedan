import { _API } from "./_API";

const apiUrl = import.meta.env.VITE_SAEEDAN_BASE_URL;

//Auth
export const GetAllBlog = async () => {
    const mLogin = await _API(`${apiUrl}/showAllBlogs`, "get", []);
    return mLogin;
};

export const getBlogs = (slug) => async (dispatch) => {
    try {
        const res = await _API(`${apiUrl}/blogs/${slug}`, "get", []);
        return res;
    } catch (err) {
        throw err;
    }
};

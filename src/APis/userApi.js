import axios from "axios";

const rootUrl = "http://localhost:3001/v1/";
const loginUrl = rootUrl + "user/login";
const userProfileUrl = rootUrl + "user";
const logoutUrl = rootUrl + "user/logout";
const newAccessJWT = rootUrl + "tokens";
const userVerificationUrl = userProfileUrl + "/verify";

export const userLogin = (frmData) => {
    return new Promise(async (resolve, reject) => {
        try {

            const res = await axios.post(loginUrl, frmData)
            console.log(res.data);
            resolve(res.data);
            if (res.data.status === '200') {
                sessionStorage.setItem("accessJWT", res.data.accessjwt);
                localStorage.setItem(
                    "crmSite",
                    JSON.stringify({ refreshJWT: res.data.refreshjwt })
                );
            }

        }
        catch (error) {
            reject(error)
        }
    })
}

export const fetchUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const accessJWT = sessionStorage.getItem("accessJWT");

            if (!accessJWT) {
                reject("Token not found!");
            }

            const res = await axios.get(userProfileUrl, {
                headers: {
                    Authorization: accessJWT,
                },
            });
            console.log(res);

            resolve(res.data.user.userProfile);

        } catch (error) {
            reject(error)
        }
    })
}
export const userLogout = async () => {
    try {
        await axios.delete(logoutUrl, {
            headers: {
                Authorization: sessionStorage.getItem("accessJWT"),
            },
        });
    } catch (error) {
        console.log(error);
    }
};
export const fetchNewAccessJWT = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const { refreshJWT } = JSON.parse(localStorage.getItem("crmSite"));

            if (!refreshJWT) {
                reject("Token not found!");
            }

            const res = await axios.get(newAccessJWT, {
                headers: {
                    Authorization: refreshJWT,
                },
            });

            if (res.data.status === 200) {
                sessionStorage.setItem("accessJWT", res.data.accessJWT);
            }

            resolve(true);
        } catch (error) {
            if (error.message === "Request failed with status code 403") {
                localStorage.removeItem("crmSite");
            }

            reject(false);
        }
    });
};
export const checkingLogin = (login, password) => {
    return {
        type: "GETTING_LOGIN",
        login: login,
        password: password,
    }
};

const initialState = {
    login: "",
    password: "",
    auth: null,
};

const loginChecking = (l, p) => {
    return (l === "1" && p === "1")
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GETTING_LOGIN":
            return {
                ...state,
                login: action.login,
                password: action.password,
                auth: loginChecking(action.login, action.password),
            };
        default:
            return state;
    }
};

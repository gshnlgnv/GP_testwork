const initialState = {
    news: "",
};

export const changeNewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "NEWS1":
            return {
                ...state,
                news: "NEWS1",
            };
        case "NEWS2":
            return {
                ...state,
                news: "NEWS2",
            };
        case "NEWS3":
            return {
                ...state,
                news: "NEWS3",
            };
        default:
            return state;
    }
};

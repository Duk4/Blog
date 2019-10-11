const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('LOGIN SUCCESS', action.auth);
            return {
                ...state,
                authError: null
            };
        case 'LOGIN_ERROR':
            console.log('LOGIN ERROR');
            return {
                ...state,
                authError: 'Login failed'
            };
        case 'LOGOUT_SUCCESS':
            console.log('LOG OUT SUCCESS');
            return state;
        default:
            return state;
    }
}

export default authReducer;
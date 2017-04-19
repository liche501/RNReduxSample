import { handleActions } from 'redux-actions';

const loginReducer = handleActions({
    LOGIN: (state , action) => {
        console.log(state,action)
        // return Object.assign({}, state, action.payload);
        return {...state,...action.payload}
    },
}, {});

export default loginReducer;
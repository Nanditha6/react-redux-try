const initialState = {
    color : 'dark'
}

const switchReducer = (state = initialState, action) => {
    switch (state.color) {
        case 'light': return Object.assign({}, state, { color: 'dark'})
        case 'dark': return Object.assign({}, state, { color: 'light'})
        default: return state;
    }
}

export default switchReducer;
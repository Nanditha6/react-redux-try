const initialState = {
    name: 'Jane',
    age: '26',
    nation: 'US'
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBMIT':    
            return Object.assign({}, state, { name : action.payload.name, 
                                              age : action.payload.age, 
                                              nation : action.payload.nation });
        default: return state;
    }
}

export default userReducer;
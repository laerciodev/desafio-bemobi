const INITIAL_STATE = { index: 0, active: true };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        
        case 'BUTTON_SERVICES':
            return {...state, index: 0 }

        case 'BUTTON_DATA':
            return {...state, index: 1 } 
        
        default:
            return state
    }
};


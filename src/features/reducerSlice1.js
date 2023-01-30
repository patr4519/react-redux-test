const initialState = [{value: 0}, {value: 1}, {value: 2}];

export default function reducer1(state = initialState, action) {
    switch(action.type) {
        case 'red1/add1': {
            let lastValue = state[state.length - 1].value;
            let nextValue = lastValue + 1;
            return [
                ...state,
                {value: nextValue}
            ]
        }
        case 'red1/showAllStateValue': {
            console.log(state);
        }
        case 'red1/changeLastValue': {
            let lastValue = state[state.length - 1].value;
            let newValue = lastValue + 1;
            return [    
                ...state.slice(0, state.length - 1),
                {value: newValue}
            ]
        }
        case 'red1/deleteValues': {
            return [...state.slice(0, 1)]
        }
        default: 
            return initialState
    }
}
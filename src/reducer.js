import { combineReducers } from 'redux';

import reducerSlice1 from './features/reducerSlice1';
import reducerSlice2 from './features/reducerSlice2';

const rootReducer = combineReducers({
    red1: reducerSlice1,
    red2: reducerSlice2
})

export default rootReducer;
import { combineReducers } from 'redux';

import reducer1 from './features/reducerSlice1';
import reducer2 from './features/reducerSlice2';

const rootReducer = combineReducers({
    red1: reducer1,
    red2: reducer2
})

export default rootReducer;
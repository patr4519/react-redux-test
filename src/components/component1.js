import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const state = (state) => state.red1;

export const Component1 = () => {
    const stateRed1 = useSelector(state);

    const dispath = useDispatch();

    const add1 = () => {
        dispath({ type: 'red1/add1' })
    }

    const handleChange = () => {
        dispath({type: 'red1/changeLastValue'})
    }

    const deleteValues = () => {
        dispath({type: 'red1/deleteValues'})
    }

    const showAllStates = () => {
        console.log(stateRed1)
    }

    return (
        <div className='component1'>
            <button onClick={add1}>Add 1</button>
            <button onClick={handleChange}>Change last value</button>
            <button onClick={deleteValues}>Delete values</button>
            <button onClick={showAllStates}>Show all states</button>
        </div>
    )
}
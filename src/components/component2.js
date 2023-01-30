import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const red1State = (state) => state.red1;

export const Component2 = () => {

    const state = useSelector(red1State);

    return (
        <div className='component2'>
            {
                state.map((item, index) => {
                    return <div key={index}>{item.value}</div>
                })
            }
        </div>
    )
}
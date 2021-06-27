import React, { createContext } from 'react';

export const Context = createContext();

export const Provider = (props) => {
    return (
        <Context.Provider></Context.Provider>
    )
}
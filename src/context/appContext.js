import React, { useReducer, useContext, useEffect } from 'react';

import reducer from './reducer';

import { } from './actions';

const initialState = {};

const AppContext = React.createContext();



const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <AppContext.Provider
            value={{
                ...state,

            }}
        >
            {children}
        </AppContext.Provider>
    );

};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
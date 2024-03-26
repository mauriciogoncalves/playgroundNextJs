"use client"
import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';

interface GlobalsContextType {
    globalVariable: any;
    setGlobalVariable: React.Dispatch<React.SetStateAction<any>>;
    isWhiteTheme: boolean;
    setIsWhiteTheme: any;
}





const GlobalsContext = createContext<GlobalsContextType | undefined>(undefined);

export const GlobalsProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [isWhiteTheme, _setIsWhiteTheme] = useState<boolean>(false);
    const [globalVariable, setGlobalVariable] = useState<any>({"isLogged": false});
    useEffect(() => {
        //_setIsWhiteTheme(localStorage.getItem('isWhiteTheme') === 'false');
    }, [])
    const setIsWhiteTheme = function (value: boolean) {
        _setIsWhiteTheme(value);
        if (typeof localStorage == 'object' && typeof localStorage.getItem == 'function') {
            localStorage.setItem('isWhiteTheme', isWhiteTheme ? 'true' : 'false');
        }
    }
    return (
        <GlobalsContext.Provider value={{globalVariable, setGlobalVariable, isWhiteTheme, setIsWhiteTheme}}>
            {children}
        </GlobalsContext.Provider>
    );
};

export const useGlobals = (): GlobalsContextType => {
    const context = useContext(GlobalsContext);
    if (!context) {
        throw new Error('useGlobals must be used within a GlobalsProvider');
    }
    return context;
};
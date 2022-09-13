import { createContext, useCallback, useContext, useEffect, useState } from 'react';

export const WindowContext = createContext(null);

export function WindowProvider({ value, children }) {
    const [windowWidth, setWindowWidth] = useState(0);

    // resize window
    const getWindowWidth = useCallback(() => {
        setWindowWidth(window.innerWidth);
    }, []);
    // invoked
    useEffect(() => {
        getWindowWidth();
        // invoked window width --resize
        window.addEventListener('resize', getWindowWidth);
        return () => window.removeEventListener('resize', getWindowWidth);
    }, [getWindowWidth]);

    return (
        <WindowContext.Provider value={{ windowWidth, setWindowWidth, ...value }}>{children}</WindowContext.Provider>
    );
}

export function UseWindowContext() {
    const windowContext = useContext(WindowContext);
    return windowContext;
}

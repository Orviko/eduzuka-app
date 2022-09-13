import { createContext, useContext, useState } from 'react';

export const HeaderContext = createContext(null);

export function HeaderProvider({ value, children }) {
    const [headerHeight, setHeaderHeight] = useState(0);
    const [chatHeaderHeight, setChatHeaderHeight] = useState(0);
    const [menuTopHeight, setMenuTopHeight] = useState(0);
    const [hContainerMWidth, sethHContainerMWidth] = useState(null);
    const [whichPathname, setWhichPathname] = useState('');

    return (
        <HeaderContext.Provider
            value={{
                headerHeight,
                setHeaderHeight,
                chatHeaderHeight,
                setChatHeaderHeight,
                hContainerMWidth,
                sethHContainerMWidth,
                whichPathname,
                setWhichPathname,
                menuTopHeight,
                setMenuTopHeight,
                ...value,
            }}
        >
            {children}
        </HeaderContext.Provider>
    );
}

export function UseHeaderContext() {
    const headerContext = useContext(HeaderContext);
    return headerContext;
}

import { createContext } from "react";


export const CountContext = createContext({
    count: createContext(0),
    setCount: createContext(() => {}),
});


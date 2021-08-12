import React from "react";

export interface ThemeContextInterface {
    theme: boolean,
    setTheme: (theme:boolean) => void,
};

export const ThemeContext = React.createContext<ThemeContextInterface>({
    theme: false,
    setTheme: (theme:boolean) => {},
});
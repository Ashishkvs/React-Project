import { useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
export function Help() {
    // Access the context value using useContext
    const { theme, toggleTheme } = useContext(ThemeContext);
    console.log("isEnable", theme);
    useEffect(() => {
        toggleTheme(false);
    }, [])

    return (<>
        <h1>Help Component</h1>
        <h1>Current theme: {theme}</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </>)
}
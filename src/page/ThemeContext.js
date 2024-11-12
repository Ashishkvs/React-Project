
import { createContext } from 'react';
import { useState } from 'react';

// Create the context
export const ThemeContext = createContext(null); // default value will be null 

// BUT SINCE THEME PROVIDER IS used as WRAPPER toggleTheme will be called on initialization and it will reverse the exisitng value null -> !null => true 

// Create a provider component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(true);

    const toggleTheme = () => {
        console.log("toggling theme");
        
        setTheme(!theme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

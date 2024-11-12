
import { createContext } from 'react';

// Create the context
export const ThemeContext = createContext(null);

// Create a provider component
// export const ThemeProvider = ({ children }) => {
//     const [theme, setTheme] = useState('light');

//     const toggleTheme = () => {
//         setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
//     };

//     return (
//         <ThemeContext.Provider value={{ theme, toggleTheme }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };

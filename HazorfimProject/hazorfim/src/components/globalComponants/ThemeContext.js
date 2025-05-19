// import React, { createContext, useState, useEffect } from 'react';

// const ThemeContext = createContext(null);

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
//   };

//   useEffect(() => {
//     // הגדרת className ל-body
//     document.body.className = `body${theme.charAt(0).toUpperCase() + theme.slice(1)}`;

//     // ניקוי class כאשר הקומפוננט מתפרק
//     return () => {
//       document.body.className = '';
//     };
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeContext;
import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.className = `body${theme.charAt(0).toUpperCase() + theme.slice(1)}`;
    return () => {
      document.body.className = '';
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

import React, {useEffect, useState, createContext, useContext} from "react";



const ThemeContext = createContext<any>({} as any);

//   interface props { 
//     initialTheme: JSX.Element | JSX.Element[],
//     children: JSX.Element | JSX.Element[],
// }


export default function ThemeContextProvider({children}: any){


const [theme, setTheme] = useState(localStorage.getItem("theme") !== "dark" ? "light" : "dark");



  useEffect(() => {

         const root = window.document.documentElement;

        const removeTheme = theme === "dark" ? "light" : "dark";        

         root.classList.add(theme);
         root.classList.remove(removeTheme);
         localStorage.setItem("theme", theme)
  }, [ theme ])

 return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    { children }
    </ThemeContext.Provider>
 )
}

export function useTheme(){
  return useContext(ThemeContext)
} 

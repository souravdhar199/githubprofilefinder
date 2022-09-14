import { createContext, useEffect, useState } from "react";

const GithubContext = createContext(); //this will get return

// Export a provider function
export const GithubProvider = ({ children }) => {
    const [users, Setusers] = useState('');
    // Value will pass to teh componenets
    useEffect(() => {
        Setusers("Data from Context")
    }, [])
    return <GithubContext.Provider value={{ users }}>
        {/*Children that are passed in*/}
        {children}
    </GithubContext.Provider>
}

export default GithubContext
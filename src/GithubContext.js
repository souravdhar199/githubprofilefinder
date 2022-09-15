import { createContext, useEffect } from "react";
import { useReducer } from "react";

const GithubContext = createContext(); //this will get return
// Function to update the States
function reducer(state, action) {
    if (action.type === "i") {
        return {
            ...state, [action.field]: action.information
        }
    }
    else if (action.type === "age") {
        return { ...state, [action.field]: action.information }
    }
    else {
        return state;
    }
}


// Export a provider function
export const GithubProvider = ({ children }) => {

    const initialState = { names: " ", age: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(state)

    useEffect(() => {
        dispatch({ type: "i", field: "names", information: "Sourav" });
        dispatch({ type: "age", field: "age", information: "23" });
    }, [])
    return <GithubContext.Provider value={{ state }}>
        {/*Children that are passed in*/}
        {children}
    </GithubContext.Provider>
}

export default GithubContext
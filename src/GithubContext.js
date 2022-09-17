import { createContext, useEffect, useState } from "react";
import { useReducer } from "react";

const GithubContext = createContext(); //this will get return
// Function to update the States
function reducer(state, action) {
  if (action.type === "add") {
    return {
      ...state,
      [action.field]: action.values,
    };
  } else {
    return state;
  }
}

// Export a provider function
export const GithubProvider = ({ children }) => {
  const initialState = { infos: [] };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [lookUp, setLookup] = useState("git");

  // Fetching the data from Github API
  const GetGitUser = async (name) => {
    const response = await fetch(
      `https://api.github.com/search/users?q=${name}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );

    const datas = await response.json();

    dispatch({ type: "add", field: "infos", values: datas.items });
  };

  useEffect(() => {
    GetGitUser(lookUp);
  }, [lookUp]);

  return (
    <GithubContext.Provider value={{ state, setLookup }}>
      {/*Children that are passed in*/}
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

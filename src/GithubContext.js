import { createContext, useEffect, useState } from "react";
import { useReducer } from "react";

const GithubContext = createContext(); //this will get return

// Export a provider function
export const GithubProvider = ({ children }) => {
  const [selectedProfile, SetselectedProfile] = useState("");
  const initialState = { infos: [] };
  // Function to update the States
  function reducer(state, action) {
    if (action.type === "add") {
      return {
        ...state,
        [action.field]: action.values,
      };
    } else {
      return initialState;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState); // Reducer State
  const [lookUp, setLookup] = useState();

  // Fetching the data from Github API
  const GetGitUser = async (name) => {
    // We only want to show profile whenever user wants to see it
    if (name === undefined) {
      return;
    } else {
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
    }
  };

  useEffect(() => {
    GetGitUser(lookUp);
  }, [lookUp]);

  return (
    <GithubContext.Provider
      value={{
        state,
        setLookup,
        dispatch,
        selectedProfile,
        SetselectedProfile,
      }}
    >
      {/*Children that are passed in*/}
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

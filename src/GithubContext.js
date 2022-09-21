import { createContext, useEffect, useState } from "react";
import { useReducer } from "react";

const GithubContext = createContext(); //this will get return

// Export a provider function
export const GithubProvider = ({ children }) => {
  //This State will store profile login when user clicks any profile in home page
  const [selectedProfile, SetselectedProfile] = useState("");
  const initialState = { infos: [], userInfo: [], userRepo: [] };
  // Function to update the States
  function reducer(state, action) {
    if (action.type === "add") {
      return {
        ...state,
        [action.field]: action.values,
      };
    } else if (action.type === "addUser") {
      return {
        ...state,
        [action.field]: action.values,
      };
    } else if (action.type === "addRepo") {
      return {
        ...state,
        [action.field]: action.valuess,
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

  //Get Single user Data based on selectedProfile
  const getUserData = async (name) => {
    const response = await fetch(`https://api.github.com/users/${name}`, {
      headers: { Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` },
    });

    const userData = await response.json();

    dispatch({ type: "addUser", field: "userInfo", values: userData });
  };

  //Get user repo's
  const getUserRepo = async (name) => {
    const userRepo = await fetch(`https://api.github.com/users/${name}/repos`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });

    const repos = await userRepo.json();
    console.log("actual", repos);

    dispatch({ type: "addRepo", field: "userRepo", valuess: [...repos] });
  };

  //Only fetch when user/userrepo when user Click any certain profile
  useEffect(() => {
    getUserData(selectedProfile);
    getUserRepo(selectedProfile);
  }, [selectedProfile]);

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

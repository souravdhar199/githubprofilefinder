import React from "react";
import { useState, useContext } from "react";
import GithubContext from "../GithubContext";

function Search() {
  const [userType, setUserType] = useState("");
  const { setLookup, dispatch } = useContext(GithubContext);
  function handelSubmit(e) {
    e.preventDefault();
    // This will prevent submitting empty form
    if (userType.trim().length >= 1) {
      setLookup(userType);
    }
  }

  function handelDelete() {
    dispatch({ type: "delete", field: "infos" }); // This is will return the initial State
    setLookup(undefined);
  }
  return (
    <div className="Parentform">
      <form className="form" onSubmit={handelSubmit}>
        <label>
          <input
            className="field"
            type="text"
            name="name"
            onChange={(e) => setUserType(e.target.value)}
          />
        </label>
        <input className="button" type="submit" value="Submit" />
      </form>
      <button className="button" onClick={handelDelete}>
        Clear
      </button>
    </div>
  );
}

export default Search;

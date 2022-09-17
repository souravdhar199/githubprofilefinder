import React from "react";
import { useState, useContext } from "react";
import GithubContext from "../GithubContext";

function Search() {
  const [userType, setUserType] = useState("");
  const { setLookup } = useContext(GithubContext);
  function handelSubmit(e) {
    e.preventDefault();
    setLookup(userType);
  }
  return (
    <div className="form">
      <form onSubmit={handelSubmit}>
        <label>
          <input
            type="text"
            name="name"
            onChange={(e) => setUserType(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Search;

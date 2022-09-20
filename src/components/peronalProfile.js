import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import GithubContext from "../GithubContext";
export const PersonalProfile = () => {
  const { selectedProfile } = useContext(GithubContext);
  return (
    <>
      <Link to="/">Home</Link>
      <div>
        <h1>This is user personal profile {selectedProfile}</h1>
      </div>
    </>
  );
};

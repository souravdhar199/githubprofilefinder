import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import GithubContext from "../GithubContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const PersonalProfile = () => {
  const navs = useNavigate();
  const params = useParams();
  const { selectedProfile, state } = useContext(GithubContext);

  console.log("Personal Profile", state);
  useEffect(() => {
    if (selectedProfile !== params.names) {
      navs("*");
      return;
    }
  });
  return (
    <>
      <Link to="/">Home</Link>
      <div>
        <h1>This is user personal profile {selectedProfile}</h1>
      </div>
    </>
  );
};

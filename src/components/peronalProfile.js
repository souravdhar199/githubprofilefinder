import React, { useEffect } from "react";
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
      <div className="Container">
        <button onClick={() => navs("/")}>Go Back Home</button>
        <div className="section1">
          <div className="image">
            {" "}
            <img src={state.userInfo.avatar_url} />
          </div>
          <div className="you">
            <h1>
              Hi I am{" "}
              {state.userInfo.name == null
                ? state.userInfo.login
                : state.userInfo.name}
            </h1>
            <p>{state.userInfo.bio}</p>

            <button>
              <a href={state.userInfo.html_url}>Take me to</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

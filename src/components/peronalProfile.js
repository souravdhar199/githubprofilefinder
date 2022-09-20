import React, { useEffect } from "react";
import { useContext } from "react";
import GithubContext from "../GithubContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";

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
            <img src={state.userInfo.avatar_url} alt="" />
          </div>
          <div className="you">
            <h1>
              Hi I am{" "}
              {state.userInfo.name == null
                ? state.userInfo.login
                : state.userInfo.name}
            </h1>
            <p className="bio">{state.userInfo.bio}</p>

            <button>
              <a
                href={state.userInfo.html_url}
                target="_blank"
                rel="noreferrer"
              >
                GitHub Profile
              </a>
            </button>
          </div>
        </div>

        <div className="section2">
          <p>
            Followers:{" "}
            <>
              <CountUp
                start={0}
                end={state.userInfo.followers}
                delay={1}
              ></CountUp>
            </>
          </p>
          <p>
            Repo's:{" "}
            <>
              <CountUp
                start={0}
                end={state.userInfo.public_repos}
                delay={1}
              ></CountUp>
            </>
          </p>

          <p>
            Gist's:{" "}
            <>
              <CountUp
                start={0}
                end={state.userInfo.public_gists}
                delay={1}
              ></CountUp>
            </>
          </p>
        </div>
      </div>
    </>
  );
};
//public_repos  public_gists

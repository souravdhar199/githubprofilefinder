import { useContext } from "react";
import { FaLink, FaEye, FaInfo, FaStar, FaUtensils } from "react-icons/fa";
import GithubContext from "../GithubContext";
import React from "react";
function UserRepo() {
  const { state } = useContext(GithubContext);
  console.log("From userRepo", state);

  return (
    <div className="repoParent">
      {state.userRepo.map((item) => (
        <div className="childsRepo">
          <h2>
            <a href={item.html_url} target="_blank" rel="noreferrer">
              <FaLink className="link1" /> {item.name}
            </a>
          </h2>
          <p>{item.description}</p>
          <div className="infos">
            <p>
              <FaEye className="link1" />
              {item.watchers_count}
            </p>
            <p>
              <FaStar className="link1" />
              {item.stargazers_count}
            </p>
            <p>
              <FaInfo className="link1" />
              {item.open_issues}
            </p>
            <p>
              <FaUtensils className="link1" />
              {item.forks}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserRepo;

import { useContext } from "react";
import GithubContext from "../GithubContext";
import React from "react";
function UserRepo() {
  const { state } = useContext(GithubContext);
  console.log("From userRepo", state);

  return (
    <div>
      {state.userRepo.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
}

export default UserRepo;

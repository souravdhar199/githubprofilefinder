/* eslint-disable jsx-a11y/alt-text */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GithubContext from "../GithubContext";

function Profile() {
  const navs = useNavigate();
  const { state, SetselectedProfile } = useContext(GithubContext);
  console.log(state);
  function profileClick(names) {
    console.log(names);
    SetselectedProfile(names);
    navs(`/${names}`);
  }
  return (
    <div className="Parent">
      {state.infos.map((item) => (
        <div className="child" onClick={() => profileClick(item.login)}>
          <div className="avatar">
            {" "}
            <img src={item.avatar_url} />
          </div>
          <div className="name">
            <p>{item.login}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Profile;

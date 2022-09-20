import "./styles/profile.css";
import "./styles/search.css";
import "./styles/userprofile.css";
import "./styles/navbar.css";
import { GithubProvider } from "./GithubContext";
import Profile from "./components/profile";
import Search from "./components/Search";
import PageNotFound from "./components/pageNotFound";
import { PersonalProfile } from "./components/personalProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";

function App() {
  return (
    <BrowserRouter>
      <GithubProvider>
        <div className="App">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <NavBar />
                  <Search />
                  <Profile />
                </>
              }
            ></Route>
            <Route
              exact
              path="/about/:names"
              element={<PersonalProfile />}
            ></Route>

            <Route />

            <Route path="*" element={<PageNotFound />} />

            <Route />
          </Routes>
        </div>
      </GithubProvider>
    </BrowserRouter>
  );
}

export default App;

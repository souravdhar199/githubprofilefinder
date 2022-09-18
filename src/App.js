import "./styles/profile.css";
import "./styles/search.css";
import { GithubProvider } from "./GithubContext";
import Profile from "./components/profile";
import Search from "./components/Search";
import { PersonalProfile } from "./components/peronalProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GithubProvider>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Search />
                  <Profile />
                </>
              }
            ></Route>
            <Route path="/about" element={<PersonalProfile />}></Route>
          </Routes>
        </div>
      </GithubProvider>
    </BrowserRouter>
  );
}

export default App;

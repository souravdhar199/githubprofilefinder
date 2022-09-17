import "./App.css";
import { GithubProvider } from "./GithubContext";
import Profile from "./components/profile";
import Search from "./components/Search";

function App() {
  return (
    <GithubProvider>
      <div className="App">
        <Search />
        <Profile />
      </div>
    </GithubProvider>
  );
}

export default App;

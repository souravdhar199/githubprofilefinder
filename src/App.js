import './App.css';
import { GithubProvider } from './GithubContext';
import Profile from './profile';

function App() {
  return (
    <GithubProvider>
      <div className="App">
        <Profile />
      </div>
    </GithubProvider>
  );
}

export default App;

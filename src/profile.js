import { useContext } from 'react';
import GithubContext from './GithubContext';

function Profile() {
    const { state } = useContext(GithubContext)
    return (
        <div>
            hello from profile and {state.names} and he is {state.age} years old
        </div>
    )
}

export default Profile

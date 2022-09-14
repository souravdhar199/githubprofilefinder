import { useContext, useEffect } from 'react';
import GithubContext from './GithubContext';
function Profile() {
    const { users } = useContext(GithubContext)
    return (
        <div>
        hello from profile and -->  {users}
        </div>
    )
}

export default Profile

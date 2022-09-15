/* eslint-disable jsx-a11y/alt-text */
import { useContext } from 'react';
import GithubContext from './GithubContext';

function Profile() {
    const { state } = useContext(GithubContext)

    return (
        <div className='Parent'>
            {
                state.infos.map((item) => (

                    <div className='child'>
                        <div className='avatar'> <img src={item.avatar_url} /></div>
                        <div className='name'><p>{item.login}</p></div>
                    </div>

                ))

            }

        </div >
    )
}

export default Profile

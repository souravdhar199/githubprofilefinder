import { useContext, useEffect } from 'react';
import { useReducer } from 'react';
import GithubContext from './GithubContext';

// this fucntion will trriger whenever we call dispatch
function game(state, action) {
    console.log(state, action)
    if (action.type === 'i') {
        return state + 4; // Set state to 4 if type === i
    }
    else if (action.type === 'j') {
        return state + 8; // Set state to 8 if type === j
    }
    else {
        return state;
    }
}

function Profile() {
    //initialize the reducer where state is variable and dispath() to update
    //And useReducer take the function to update the State and the initial State
    const [state, dispatch] = useReducer(game, 0)
    const { users } = useContext(GithubContext)
    useEffect(() => {
        dispatch({ type: "j" })
    }, [])

    return (
        <div>
            hello from profile and {users} {state}
        </div>
    )
}

export default Profile

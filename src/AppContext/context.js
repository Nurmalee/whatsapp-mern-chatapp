import { useState, useEffect } from "react";
import { useContext, createContext} from "react";
import { auth, provider } from '../config/firebase'

const StateContext = createContext()

export const StateProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signInWithGoogle = () => {
        auth.signInWithPopup(provider)
        .then(result => setCurrentUser(result.user))
        .catch(error => alert(error.message))
    }

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
    })

    return (
        <StateContext.Provider value={{currentUser, signInWithGoogle}}>
            {!loading && children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
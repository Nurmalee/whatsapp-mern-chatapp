import styled from 'styled-components'
import { useStateContext } from '../AppContext/context'

const SignIn = () => {
    const {signInWithGoogle} = useStateContext()

    return (
        <SignInContainer>
            <img src="" alt="" />
            <button onClick={signInWithGoogle}>sign in with google</button> 
        </SignInContainer>
    )
}

export default SignIn

const SignInContainer = styled.div`

    > button {
        padding: 10px 30px;
        text-transform: capitalize;
    }

`

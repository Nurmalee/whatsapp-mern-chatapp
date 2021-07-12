import styled from 'styled-components'
import { useStateContext } from '../AppContext/context'
import bg from './../resources/images/RAh3ga.jpg'
import whatsapp from './../resources/images/whatsapp icon.png'

const SignIn = () => {
    const {signInWithGoogle} = useStateContext()

    return (
        <SignInContainer>
            <img src={whatsapp} height={200} alt="whatsapp_bg" />
            <button onClick={signInWithGoogle}>sign in with google</button> 
        </SignInContainer>
    )
}

export default SignIn

const SignInContainer = styled.div`

    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;

    > button {
        margin-top: 20px;
        padding: 15px 40px;
        text-transform: capitalize;
        background-color: hsl(150, 35%, 57%);
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        border-radius: 2px;
        border: none;
        outline: none;
        box-shadow: -5px 7px 4px hsl(150, 35%, 17%);
        cursor: pointer;

        &:hover {
            background-color: hsl(150, 35%, 27%);
            box-shadow: -5px 7px 4px hsl(150, 35%, 17%);
            color: white;
        }
    }

`

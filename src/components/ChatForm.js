import styled from 'styled-components'
import { useState } from 'react'
import { InsertEmoticonOutlined, MicOutlined } from '@material-ui/icons';
import { IconButton } from '@material-ui/core'

const ChatForm = ({writeMessage}) => {

    const [message, setMessage] = useState('')

    const handleForm = (e) => {
        e.preventDefault()
        writeMessage(message)
        setMessage('')
    }

    return (
        <ChatFormContainer>

            <IconButton>
                <InsertEmoticonOutlined />
            </IconButton>
            

            <form onSubmit={handleForm}>
                <input type='text' value={message} onChange={(e) => setMessage(e.target.value)} />
            </form>

            <IconButton>
                <MicOutlined />
            </IconButton>

        </ChatFormContainer>
    )
}

export default ChatForm


const ChatFormContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background-color: #ededed;

    > form {
        border-radius: 20px;
        flex: 1;
        padding: 0 10px;

        > input {
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            font-weight: 300;
            width: 100%;
            border-radius: 20px;
            outline: none;
            border: none;
            padding: 10px 20px;
        }
    }
`
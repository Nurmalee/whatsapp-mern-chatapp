import styled from 'styled-components'
import { useStateContext } from '../AppContext/context'
import './trick.css'

const ChatMessage = ({message, timestamp, sender}) => {

    const {currentUser} = useStateContext()

    return (
        <ChatMessageContainer >
            <span>{sender}</span>
           
            <MessageDetails className={currentUser ? 'sent' : `received`}>
                {message}
                <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
            </MessageDetails>
        </ChatMessageContainer>
    )
}

export default ChatMessage

const ChatMessageContainer = styled.div`
    > span {
        font-size: 11px;
        padding-left: 10px;
    }
`

const MessageDetails = styled.p`
    font-size: 12px;
    border-radius: 15px;
    width: fit-content;
    padding: 10px;
    margin: 2px 0 15px 0;
    background-color: white;

    > span {
        font-size: 11px;
        margin-left: 25px;
    }

`